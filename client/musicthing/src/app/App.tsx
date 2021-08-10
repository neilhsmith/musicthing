import "styles/main.scss";
import "./app.styles.scss";

import { AppPage } from "features/app/components";

export default function App() {
  return (
    <div className="app theme-dark" data-testid="app">
      <AppPage></AppPage>
    </div>
  );
}
