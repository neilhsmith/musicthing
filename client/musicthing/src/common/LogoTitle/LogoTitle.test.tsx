import { render, screen, defaultTheme } from "test-utils";

import LogoTitle from "./LogoTitle";

describe("Component: LogoTitle", () => {
  it("matches its snapshot", () => {
    const { container } = render(<LogoTitle />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays the logo", () => {
    render(<LogoTitle />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("displays the title", () => {
    render(<LogoTitle />);

    expect(screen.getByRole("heading")).toHaveTextContent("MusicThing");
  });

  it("uses the theme's textActive as the title's color", () => {
    render(<LogoTitle />);

    expect(screen.getByRole("heading")).toHaveStyleRule(
      "color",
      defaultTheme.colors.textActive
    );
  });
});
