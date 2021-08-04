import axios, { AxiosInstance, CancelTokenSource } from "axios";

import authService from "features/auth/auth.service";

// https://bionicjulia.com/blog/axios-wrappers-react-typescript

export interface IApiClient {
  get<TResponse>(path: string): Promise<TResponse>;

  post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: any
  ): Promise<TResponse>;
}

export class ApiClient implements IApiClient {
  private client: AxiosInstance;
  private cancelTokenSource: CancelTokenSource;

  protected createAxiosClient(): AxiosInstance {
    return axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true,
    });
  }

  constructor() {
    this.client = this.createAxiosClient();
    this.createRequestInteceptor();
    this.createResponseInteceptor();

    const CancelToken = axios.CancelToken;
    this.cancelTokenSource = CancelToken.source();
  }

  private createRequestInteceptor() {
    // adds the Authorization header if a user & jwt exist in localStorage

    this.client.interceptors.request.use(
      async (config) => {
        const user = authService.getUser();
        const jwt = user?.jwtToken;

        if (jwt) {
          config.headers = {
            Authorization: `Bearer ${jwt}`,
          };
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private createResponseInteceptor() {
    // refreshes the jwt when a 401 is returned & then reruns the original request
    // it ejects itself so that the inteceptor doesnt run multiple times on the refresh-token route
    // todo: if the 401 is for the users/refresh-token path then the jwt cannot be
    //   refreshed (most likely that the refresh token has expired)

    const inteceptor = this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          this.client.interceptors.response.eject(inteceptor);
          originalRequest._retry = true;

          await authService.refreshAccessToken();

          this.createResponseInteceptor();
          return this.client(originalRequest);
        }

        return Promise.reject(error);
      }
    );
  }

  public cancel(reason: string) {
    this.cancelTokenSource.cancel(reason);
  }

  async get<TResponse>(path: string): Promise<TResponse> {
    const response = await this.client.get<TResponse>(path, {
      cancelToken: this.cancelTokenSource.token,
    });
    return response.data;
  }

  // todo: config should be a typed RequestConfig (defined in app/types maybe?)
  async post<TRequest, TResponse>(
    path: string,
    payload?: TRequest,
    config?: any
  ): Promise<TResponse> {
    const response = payload
      ? await this.client.post<TResponse>(path, payload, {
          cancelToken: this.cancelTokenSource.token,
        })
      : await this.client.post<TResponse>(path, null, {
          cancelToken: this.cancelTokenSource.token,
        });
    return response.data;
  }
}

const api = new ApiClient();
export default api;
