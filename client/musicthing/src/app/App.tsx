import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "typeface-poppins";
import "../styles/main.scss";

import store from "app/store";

import LoginPage from "pages/LoginPage";
import PlayerPage from "pages/PlayerPage";

function App() {
  return (
    <Provider store={store}>
      <div className="app theme-dark">
        <Router>
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <PlayerPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
