// https://github.com/flexdinesh/react-socks
// Copied manually for learning purposes.

import { render, screen } from "@testing-library/react";

import BreakpointProvider from "./BreakpointProvider";

describe("Breakpoint Context Provider", () => {
  it("renders without crashing", () => {
    render(
      <BreakpointProvider>
        <div data-testid="breakpoint-provider-child">
          the breakpoint provider child
        </div>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("breakpoint-provider-child")).toHaveTextContent(
      "the breakpoint provider child"
    );
  });
});

describe("useCurrentWidth", () => {
  // todo
});

describe("useCurrentBreakpointName", () => {
  // todo
});
