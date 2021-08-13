import React, { ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { dark } from "styles/themes";

const AllProviders = ({ children }: any) => {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: any) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";

export { customRender as render, screen, dark as defaultTheme };
