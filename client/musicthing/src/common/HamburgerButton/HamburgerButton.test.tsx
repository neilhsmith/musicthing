import { render, screen } from "@testing-library/react";

import HamburgerButton from "./HamburgerButton";

describe("HamburgerButton", () => {
  it("renders a button with an active modifier class", () => {
    render(<HamburgerButton active={true} onClick={() => {}} />);

    expect(screen.getByRole("button")).toHaveClass("hamburger--active");
  });

  it("renders a button without an active modifier class", () => {
    render(<HamburgerButton active={false} onClick={() => {}} />);

    expect(screen.getByRole("button")).not.toHaveClass("hamburger--active");
  });

  it("executes the onClick callback when clicked", () => {
    let test = 0;
    render(<HamburgerButton active={false} onClick={() => (test += 1)} />);

    screen.getByRole("button").click();

    expect(test).toBe(1);
  });
});
