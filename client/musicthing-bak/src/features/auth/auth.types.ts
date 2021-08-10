export interface IUser {
  id: number;
  username: string;
  jwtToken: string;
}

export interface ILoginProps {
  username: string;
  password: string;
}

export interface IRevokeTokenProps {
  token: string;
}

export interface IMessageResponse {
  message: string;
}
