import "styles/main.scss";
import "./app.styles.scss";

import "typeface-poppins";

import { PlayerPage } from "features/player/components";
import { LoginPage } from "features/auth/components";

export default function App() {
  return (
    <div className="app theme-dark" data-testid="app">
      <LoginPage />
    </div>
  );
}
