import { render, screen } from "@testing-library/react";

import Page from "./Page";

describe("Component: Page", () => {
  it("renders children", () => {
    render(
      <Page>
        <span data-testid="1">expected text 1</span>
        <span data-testid="2">expected text 2</span>
      </Page>
    );

    expect(screen.getByTestId(1)).toHaveTextContent("expected text 1");
    expect(screen.getByTestId(2)).toHaveTextContent("expected text 2");
  });

  // todo: shouldn't be testing for classes? this confuses me because the whole
  // point of the Page component is to be a styled wrapper so shouldn't I check
  // that those styles are applied?
  it("sets the page class", () => {
    const { container } = render(
      <Page>
        <span>children</span>
      </Page>
    );

    expect(container.firstChild).toHaveClass("page");
  });
});
