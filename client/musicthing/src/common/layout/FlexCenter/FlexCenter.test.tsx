import { render, screen } from "@testing-library/react";

import FlexCenter from "./FlexCenter";

describe("Component: FlexCenter", () => {
  it("renders children", () => {
    render(
      <FlexCenter>
        <span data-testid="1">expected text 1</span>
        <span data-testid="2">expected text 2</span>
      </FlexCenter>
    );

    expect(screen.getByTestId(1)).toHaveTextContent("expected text 1");
    expect(screen.getByTestId(2)).toHaveTextContent("expected text 2");
  });

  // todo: shouldn't be testing for classes? this confuses me because the whole
  // point of the FlexCenter component is to be a styled wrapper so shouldn't I
  // check that those styles are applied?
  it("sets the flex-center class", () => {
    const { container } = render(
      <FlexCenter>
        <span>children</span>
      </FlexCenter>
    );

    expect(container.firstChild).toHaveClass("flex-center");
  });
});
