import classNames from "./classNames";

describe("Util: classNames", () => {
  it("handles no args", () => {
    const result = classNames();

    expect(result).toBe("");
  });

  it("handles string arguments", () => {
    const result = classNames("test1", "test2");

    expect(result).toBe("test1 test2");
  });

  it("handles number arguments", () => {
    const result = classNames(1, 2);

    expect(result).toBe("1 2");
  });

  it("handles array arguments", () => {
    const result = classNames(["one", 2]);

    expect(result).toBe("one 2");
  });

  it("handles function arguments", () => {
    const result1 = classNames(() => "foo");
    const result2 = classNames(() => false);

    expect(result1).toBe("foo");
    expect(result2).toBe("");
  });

  it("handles object arguments", () => {
    const result = classNames({
      foo: true,
      bar: false,
      baz: () => true,
      qux: () => false,
      "quuz-": () => "corge",
    });

    expect(result).toBe("foo baz quuz-corge");
  });
});
