import "styles/main.scss";
import "./app.styles.scss";

import { PlayerPage } from "features/player/components";

export default function App() {
  return (
    <div className="app theme-dark" data-testid="app">
      <PlayerPage />
    </div>
  );
}
