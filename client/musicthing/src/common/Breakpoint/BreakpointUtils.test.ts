// https://github.com/flexdinesh/react-socks
// Copied manually for learning purposes.

import BreakpointUtils from "./BreakpointUtils";

describe("BreakpointUtil", () => {
  const customBreakpoints = [
    {
      name: "xs",
      width: 0,
    },
    {
      name: "sm",
      width: 400,
    },
    {
      name: "lg",
      width: 700,
    },
  ];

  it("sets and gets custom breakpoints", () => {
    BreakpointUtils.breakpoints = customBreakpoints;

    expect(BreakpointUtils.breakpoints).toBe(customBreakpoints);
  });

  it("sets and gets a default width", () => {
    const customDefaultWidth = 4242;

    BreakpointUtils.defaultWidth = customDefaultWidth;

    expect(BreakpointUtils.defaultWidth).toBe(customDefaultWidth);
  });

  it("gets the browser's current width", () => {
    let width = BreakpointUtils.getWidthSafely();

    expect(width).toBe(1024); // default CRA or jest or something?
  });

  it("gets a breakpoint's name by width", () => {
    BreakpointUtils.breakpoints = customBreakpoints;

    let xsBreakpointName = BreakpointUtils.getBreakpointName(0);
    let smBreakpointName = BreakpointUtils.getBreakpointName(500);
    let lgBreakpointName = BreakpointUtils.getBreakpointName(900);
    let negativeNumberBreakpointName = BreakpointUtils.getBreakpointName(-100);

    expect(xsBreakpointName).toBe("xs");
    expect(smBreakpointName).toBe("sm");
    expect(lgBreakpointName).toBe("lg");
    expect(negativeNumberBreakpointName).toBe("xs");
  });

  it("gets a breakpoint's width by name", () => {
    BreakpointUtils.breakpoints = customBreakpoints;

    let xsBreakpointWidth = BreakpointUtils.getBreakpointWidth("xs");
    let smBreakpointWidth = BreakpointUtils.getBreakpointWidth("sm");
    let lgBreakpointWidth = BreakpointUtils.getBreakpointWidth("lg");
    let nullBreakpointWidth = BreakpointUtils.getBreakpointWidth("doesntexist");

    expect(xsBreakpointWidth).toBe(0);
    expect(smBreakpointWidth).toBe(400);
    expect(lgBreakpointWidth).toBe(700);
    expect(nullBreakpointWidth).toBeNull();
  });

  it("gets the next breakpoint by name", () => {
    BreakpointUtils.breakpoints = customBreakpoints;

    let smBreakpoint = BreakpointUtils.getNextBreakpoint("xs");
    let lgBreakpoint = BreakpointUtils.getNextBreakpoint("sm");
    let nullBecauseLargest = BreakpointUtils.getNextBreakpoint("lg");
    let nullBecauseNotFound = BreakpointUtils.getNextBreakpoint("doesntexist");

    expect(smBreakpoint).toBe(customBreakpoints[1]);
    expect(lgBreakpoint).toBe(customBreakpoints[2]);
    expect(nullBecauseLargest).toBeNull();
    expect(nullBecauseNotFound).toBeNull();
  });

  it("gets the next breakpoint's name", () => {
    BreakpointUtils.breakpoints = customBreakpoints;

    let smBreakpointName = BreakpointUtils.getNextBreakpointName("xs");
    let lgBreakpointName = BreakpointUtils.getNextBreakpointName("sm");
    let nullBecauseLargestName = BreakpointUtils.getNextBreakpointName("lg");
    let nullBecauseNotFoundName =
      BreakpointUtils.getNextBreakpointName("doesntexist");

    expect(smBreakpointName).toBe(customBreakpoints[1].name);
    expect(lgBreakpointName).toBe(customBreakpoints[2].name);
    expect(nullBecauseLargestName).toBeNull();
    expect(nullBecauseNotFoundName).toBeNull();
  });

  it("gets the next breakpoint's width", () => {
    BreakpointUtils.breakpoints = customBreakpoints;

    let smBreakpointWidth = BreakpointUtils.getNextBreakpointWidth("xs");
    let lgBreakpointWidth = BreakpointUtils.getNextBreakpointWidth("sm");
    let nullBecauseLargestWidth = BreakpointUtils.getNextBreakpointWidth("lg");
    let nullBecauseNotFoundWidth =
      BreakpointUtils.getNextBreakpointWidth("doesntexist");

    expect(smBreakpointWidth).toBe(customBreakpoints[1].width);
    expect(lgBreakpointWidth).toBe(customBreakpoints[2].width);
    expect(nullBecauseLargestWidth).toBeNull();
    expect(nullBecauseNotFoundWidth).toBeNull();
  });

  it("renders only", () => {
    BreakpointUtils.breakpoints = customBreakpoints;

    let shouldRender = BreakpointUtils.shouldRender({
      modifier: "only",
      breakpointName: "sm",
      currentBreakpointName: "sm",
      currentWidth: 450, // current width isn't used in only
      customQuery: "", // customQuery isn't used in only
    });
    let shouldNotRender = BreakpointUtils.shouldRender({
      modifier: "only",
      breakpointName: "sm",
      currentBreakpointName: "xs",
      currentWidth: 150, // current width isn't used in only
      customQuery: "", // customQuery isn't used in only
    });

    expect(shouldRender).toBe(true);
    expect(shouldNotRender).toBe(false);
  });

  it("renders up", () => {
    BreakpointUtils.breakpoints = customBreakpoints;

    let shouldNotRenderUnder = BreakpointUtils.shouldRender({
      modifier: "up",
      breakpointName: "sm",
      currentBreakpointName: "xs",
      currentWidth: 150,
      customQuery: "", // customQuery isn't used in up
    });
    let shouldRenderSame = BreakpointUtils.shouldRender({
      modifier: "up",
      breakpointName: "sm",
      currentBreakpointName: "sm",
      currentWidth: 500,
      customQuery: "", // customQuery isn't used in up
    });
    let shouldRenderAbove = BreakpointUtils.shouldRender({
      modifier: "up",
      breakpointName: "sm",
      currentBreakpointName: "lg",
      currentWidth: 800,
      customQuery: "", // customQuery isn't used in up
    });

    expect(shouldNotRenderUnder).toBe(false);
    expect(shouldRenderSame).toBe(true);
    expect(shouldRenderAbove).toBe(true);
  });

  it("renders down", () => {
    BreakpointUtils.breakpoints = customBreakpoints;

    let shouldRenderUnder = BreakpointUtils.shouldRender({
      modifier: "down",
      breakpointName: "sm",
      currentBreakpointName: "xs",
      currentWidth: 150,
      customQuery: "", // customQuery isn't used in down
    });
    let shouldRenderSame = BreakpointUtils.shouldRender({
      modifier: "down",
      breakpointName: "sm",
      currentBreakpointName: "sm",
      currentWidth: 450,
      customQuery: "", // customQuery isn't used in down
    });
    let shouldNotRenderAbove = BreakpointUtils.shouldRender({
      modifier: "down",
      breakpointName: "sm",
      currentBreakpointName: "xl",
      currentWidth: 800,
      customQuery: "", // customQuery isn't used in down
    });

    expect(shouldRenderUnder).toBe(true);
    expect(shouldRenderSame).toBe(true);
    expect(shouldNotRenderAbove).toBe(false);
  });

  // todo: it("renders custom queries", () => {});
});
