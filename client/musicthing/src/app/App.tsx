import { ThemeProvider } from "styled-components";

import "typeface-poppins";
import { ResetStyle, GlobalStyle } from "styles/GlobalStyles";
import { dark } from "styles/themes";

import { PlayerPage } from "features/player/components";
import { LoginPage } from "features/auth/components";

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <ResetStyle />
      <GlobalStyle />
      <div className="app" data-testid="app">
        <LoginPage />
      </div>
    </ThemeProvider>
  );
}
