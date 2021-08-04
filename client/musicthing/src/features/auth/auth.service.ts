import api from "utils/api";

import { IUser, ILoginProps } from "./auth.types";

class AuthService {
  // gets the user from localStorage, null if there's no stored user
  getUser(): IUser | null {
    const userItem = localStorage.getItem("user");
    if (!userItem) {
      return null;
    }

    const user = JSON.parse(userItem) as IUser;

    return user;
  }

  async login(loginProp: ILoginProps): Promise<IUser> {
    // post username, password to 'users/authenticate'
    // store response in localStorage as 'user'
    // the refreshToken cookie is automatically set
    // return username & password, an error will be throw if the api fails

    const response = await api.post<ILoginProps, IUser>(
      "users/authenticate",
      loginProp
    );

    localStorage.setItem("user", JSON.stringify(response));

    return response;
  }

  async logout() {
    // remove the user from localStorage
    // return nothing, an error will be thrown if the api fails

    localStorage.removeItem("user");
  }

  async refreshAccessToken() {
    // post to 'users/refresh-token'
    // update the 'user' item in localStorage
    // the refreshToken cookie is automatically updated
    // return nothing
    // if a 400 'Invalid token' is returned then the refresh token has expired
    //   so redirect to the login page

    try {
      const response = await api.post<null, IUser>("users/refresh-token");

      localStorage.setItem("user", JSON.stringify(response));
    } catch (error) {
      if (
        error.response.status === 400 &&
        error.response.data.message === "Invalid token"
      ) {
        // handle expired refresh token here
        window.location.href = "login";
      }
    }
  }
}

const authService = new AuthService();
export default authService;

// returns the Bearer token as an object if a user was found in localStorage
export function authHeader(): {} | { Bearer: string } {
  const user = authService.getUser();

  if (!user) {
    return {};
  }

  return {
    Bearer: user.jwtToken,
  };
}
