import { render, screen, defaultTheme } from "test-utils";

import Page from "./Page";

describe("Component: Page", () => {
  it("matches its snapshot", () => {
    const { container } = render(
      <Page>
        <span data-testid="42">a child</span>
      </Page>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("fills the viewport", () => {
    const { container } = render(
      <Page>
        <span data-testid="42">a child</span>
      </Page>
    );

    expect(container.firstChild).toHaveStyleRule("height", "100vh");
  });

  it("sets theme's background1 as the background-color", () => {
    const { container } = render(
      <Page>
        <span data-testid="42">a child</span>
      </Page>
    );

    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      defaultTheme.colors.background1
    );
  });

  it("sets theme's text as the color", () => {
    const { container } = render(
      <Page>
        <span data-testid="42">a child</span>
      </Page>
    );

    expect(container.firstChild).toHaveStyleRule(
      "color",
      defaultTheme.colors.text
    );
  });
});
