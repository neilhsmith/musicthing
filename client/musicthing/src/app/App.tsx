import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "features/auth/PrivateRoute";

import "typeface-poppins";
import "../styles/main.scss";

import store from "app/store";
import history from "app/history";

import LoginPage from "pages/LoginPage";
import PlayerPage from "pages/PlayerPage";

function App() {
  return (
    <Provider store={store}>
      <div className="app theme-dark">
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute path="/" component={PlayerPage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
