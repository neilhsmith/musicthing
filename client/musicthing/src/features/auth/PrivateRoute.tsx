import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAppSelector } from "app/hooks";

import { isLoggedInSelector } from "./authSlice";

type PrivateRouteProps = {
  path: string;
} & RouteProps;

export function PrivateRoute({ path, ...routeProps }: PrivateRouteProps) {
  const isAuthenticated = useAppSelector(isLoggedInSelector);

  if (isAuthenticated) {
    return <Route path={path} {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}
