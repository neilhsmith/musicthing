import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "typeface-poppins";
import "../styles/main.scss";

import LoginPage from "../pages/LoginPage";
import PlayerPage from "../pages/PlayerPage";

function App() {
  return (
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
  );
}

export default App;
