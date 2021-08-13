import { generateSizingCss } from "../sizing";

describe("util: generateSizingCss", () => {
  it("handles no arguments", () => {
    const result = generateSizingCss({});

    expect(result).toBe("");
  });

  it("handles height", () => {
    const result = generateSizingCss({
      height: "1rem",
      maxHeight: "2rem",
      minHeight: "3rem",
    });

    expect(result).toContain("height: 1rem;");
    expect(result).toContain("max-height: 2rem;");
    expect(result).toContain("min-height: 3rem;");
  });

  it("handles width", () => {
    const result = generateSizingCss({
      width: "1rem",
      maxWidth: "2rem",
      minWidth: "3rem",
    });

    expect(result).toContain("width: 1rem;");
    expect(result).toContain("max-width: 2rem;");
    expect(result).toContain("min-width: 3rem;");
  });
});
