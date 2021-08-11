import { render, screen } from "@testing-library/react";

import LogoTitle from "./LogoTitle";

describe("Component: LogoTitle", () => {
  it("renders the logo", () => {
    render(<LogoTitle />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders the title", () => {
    render(<LogoTitle />);

    expect(screen.getByRole("heading")).toHaveTextContent(/MusicThing/i);
  });
});
