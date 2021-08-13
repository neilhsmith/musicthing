import { generateSpacingCss } from "../spacing";

describe("util: generateSpacingCss", () => {
  it("handles no arguments", () => {
    const result = generateSpacingCss({});

    expect(result).toBe("");
  });

  it("handles margin", () => {
    const result = generateSpacingCss({
      margin: "1rem",
      marginTop: "2rem",
      marginRight: "3rem",
      marginBottom: "4rem",
      marginLeft: "5rem",
    });

    expect(result).toContain("margin: 1rem;");
    expect(result).toContain("margin-top: 2rem;");
    expect(result).toContain("margin-right: 3rem;");
    expect(result).toContain("margin-bottom: 4rem;");
    expect(result).toContain("margin-left: 5rem;");
  });

  it("handles padding", () => {
    const result = generateSpacingCss({
      padding: "1rem",
      paddingTop: "2rem",
      paddingRight: "3rem",
      paddingBottom: "4rem",
      paddingLeft: "5rem",
    });

    expect(result).toContain("padding: 1rem;");
    expect(result).toContain("padding-top: 2rem;");
    expect(result).toContain("padding-right: 3rem;");
    expect(result).toContain("padding-bottom: 4rem;");
    expect(result).toContain("padding-left: 5rem;");
  });
});
