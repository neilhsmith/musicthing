// https://github.com/flexdinesh/react-socks
// Copied manually for learning purposes.

import { render, screen } from "@testing-library/react";
import sinon from "sinon";

import BreakpointUtils from "./BreakpointUtils";

import BreakpointProvider from "./BreakpointProvider";
import Breakpoint from "./Breakpoint";

describe("Breakpoint - xsmall", () => {
  beforeEach(() => {
    let fake = sinon.fake.returns(200);
    sinon.replace(BreakpointUtils, "getWidthSafely", fake);
  });
  afterEach(() => {
    sinon.restore();
  });

  it("should render xsmall only", () => {
    render(
      <BreakpointProvider>
        <Breakpoint xsmall only>
          <div data-testid="xsmall-only">xsmall only</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("xsmall-only")).toHaveTextContent("xsmall only");
  });

  it("should render xsmall down (and above)", () => {
    render(
      <BreakpointProvider>
        <Breakpoint xsmall down>
          <div data-testid="xsmall-down">xsmall down</div>
        </Breakpoint>
        <Breakpoint small down>
          <div data-testid="small-down">small down</div>
        </Breakpoint>
        <Breakpoint medium down>
          <div data-testid="medium-down">medium down</div>
        </Breakpoint>
        <Breakpoint large down>
          <div data-testid="large-down">large down</div>
        </Breakpoint>
        <Breakpoint xlarge down>
          <div data-testid="xlarge-down">xlarge down</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("xsmall-down")).toHaveTextContent("xsmall down");
    expect(screen.getByTestId("small-down")).toHaveTextContent("small down");
    expect(screen.getByTestId("medium-down")).toHaveTextContent("medium down");
    expect(screen.getByTestId("large-down")).toHaveTextContent("large down");
    expect(screen.getByTestId("xlarge-down")).toHaveTextContent("xlarge down");
  });
});

describe("Breakpoint - small", () => {
  beforeEach(() => {
    let fake = sinon.fake.returns(650);
    sinon.replace(BreakpointUtils, "getWidthSafely", fake);
  });
  afterEach(() => {
    sinon.restore();
  });

  it("should render small only", () => {
    render(
      <BreakpointProvider>
        <Breakpoint small only>
          <div data-testid="small-only">small only</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("small-only")).toHaveTextContent("small only");
  });

  it("should render small up (and down)", () => {
    render(
      <BreakpointProvider>
        <Breakpoint xsmall up>
          <div data-testid="xsmall-up">xsmall up</div>
        </Breakpoint>
        <Breakpoint small up>
          <div data-testid="small-up">small up</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("xsmall-up")).toHaveTextContent("xsmall up");
    expect(screen.getByTestId("small-up")).toHaveTextContent("small up");
  });

  it("should render small down (and above)", () => {
    render(
      <BreakpointProvider>
        <Breakpoint small down>
          <div data-testid="small-down">small down</div>
        </Breakpoint>
        <Breakpoint medium down>
          <div data-testid="medium-down">medium down</div>
        </Breakpoint>
        <Breakpoint medium down>
          <div data-testid="large-down">large down</div>
        </Breakpoint>
        <Breakpoint medium down>
          <div data-testid="xlarge-down">xlarge down</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("small-down")).toHaveTextContent("small down");
    expect(screen.getByTestId("medium-down")).toHaveTextContent("medium down");
    expect(screen.getByTestId("large-down")).toHaveTextContent("large down");
    expect(screen.getByTestId("xlarge-down")).toHaveTextContent("xlarge down");
  });
});

describe("Breakpoint - medium", () => {
  beforeEach(() => {
    let fake = sinon.fake.returns(850);
    sinon.replace(BreakpointUtils, "getWidthSafely", fake);
  });
  afterEach(() => {
    sinon.restore();
  });

  it("should render medium only", () => {
    render(
      <BreakpointProvider>
        <Breakpoint medium only>
          <div data-testid="medium-only">medium only</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("medium-only")).toHaveTextContent("medium only");
  });

  it("should render medium up (and down)", () => {
    render(
      <BreakpointProvider>
        <Breakpoint medium up>
          <div data-testid="medium-up">medium up</div>
        </Breakpoint>
        <Breakpoint small up>
          <div data-testid="small-up">small up</div>
        </Breakpoint>
        <Breakpoint xsmall up>
          <div data-testid="xsmall-up">xsmall up</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("medium-up")).toHaveTextContent("medium up");
    expect(screen.getByTestId("small-up")).toHaveTextContent("small up");
    expect(screen.getByTestId("xsmall-up")).toHaveTextContent("xsmall up");
  });

  it("should render medium down (and above)", () => {
    render(
      <BreakpointProvider>
        <Breakpoint medium down>
          <div data-testid="medium-down">medium down</div>
        </Breakpoint>
        <Breakpoint large down>
          <div data-testid="large-down">large down</div>
        </Breakpoint>
        <Breakpoint xlarge down>
          <div data-testid="xlarge-down">xlarge down</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("medium-down")).toHaveTextContent("medium down");
    expect(screen.getByTestId("large-down")).toHaveTextContent("large down");
    expect(screen.getByTestId("xlarge-down")).toHaveTextContent("xlarge down");
  });
});

describe("Breakpoint - large", () => {
  beforeEach(() => {
    let fake = sinon.fake.returns(1050);
    sinon.replace(BreakpointUtils, "getWidthSafely", fake);
  });
  afterEach(() => {
    sinon.restore();
  });

  it("should render large only", () => {
    render(
      <BreakpointProvider>
        <Breakpoint large only>
          <div data-testid="large-only">large only</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("large-only")).toHaveTextContent("large only");
  });

  it("should render large up (and down)", () => {
    render(
      <BreakpointProvider>
        <Breakpoint large up>
          <div data-testid="large-up">large up</div>
        </Breakpoint>
        <Breakpoint medium up>
          <div data-testid="medium-up">medium up</div>
        </Breakpoint>
        <Breakpoint small up>
          <div data-testid="small-up">small up</div>
        </Breakpoint>
        <Breakpoint xsmall up>
          <div data-testid="xsmall-up">xsmall up</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("large-up")).toHaveTextContent("large up");
    expect(screen.getByTestId("medium-up")).toHaveTextContent("medium up");
    expect(screen.getByTestId("small-up")).toHaveTextContent("small up");
    expect(screen.getByTestId("xsmall-up")).toHaveTextContent("xsmall up");
  });

  it("should render large down (and above)", () => {
    render(
      <BreakpointProvider>
        <Breakpoint large down>
          <div data-testid="large-down">large down</div>
        </Breakpoint>
        <Breakpoint xlarge down>
          <div data-testid="xlarge-down">xlarge down</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("large-down")).toHaveTextContent("large down");
    expect(screen.getByTestId("xlarge-down")).toHaveTextContent("xlarge down");
  });
});

describe("Breakpoint - xlarge", () => {
  beforeEach(() => {
    let fake = sinon.fake.returns(1400);
    sinon.replace(BreakpointUtils, "getWidthSafely", fake);
  });
  afterEach(() => {
    sinon.restore();
  });

  it("should render xlarge only", () => {
    render(
      <BreakpointProvider>
        <Breakpoint xlarge only>
          <div data-testid="xlarge-only">xlarge only</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("xlarge-only")).toHaveTextContent("xlarge only");
  });

  it("should render xlarge down", () => {
    render(
      <BreakpointProvider>
        <Breakpoint xlarge down>
          <div data-testid="xlarge-down">xlarge down</div>
        </Breakpoint>
      </BreakpointProvider>
    );

    expect(screen.getByTestId("xlarge-down")).toHaveTextContent("xlarge down");
  });
});
