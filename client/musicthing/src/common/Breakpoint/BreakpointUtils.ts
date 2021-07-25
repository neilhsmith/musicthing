// https://github.com/flexdinesh/react-socks
// Copied manually for learning purposes.

import { isBrowser } from "utils/browserOrNode";

interface Breakpoint {
  name: string; // the breakpoint's name
  width: number; // the breakpoint's min width
}

export class BreakpointUtils {
  private _defaultWidth: number = 9999;
  private _breakpoints: Breakpoint[] = [
    { name: "xsmall", width: 0 },
    { name: "small", width: 576 },
    { name: "medium", width: 768 },
    { name: "large", width: 992 },
    { name: "xlarge", width: 1200 },
  ];

  get defaultWidth(): number {
    return this._defaultWidth;
  }

  set defaultWidth(width: number) {
    this._defaultWidth = width;
  }

  get breakpoints(): Breakpoint[] {
    return this._breakpoints;
  }

  set breakpoints(breakpoints: Breakpoint[]) {
    this._breakpoints = breakpoints;
  }

  get currentWidth() {
    return this.getWidthSafely();
  }

  getWidthSafely(): number {
    return isBrowser && window
      ? Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      : this._defaultWidth;
  }

  getBreakpointName(width: number): string {
    let bpName = this._breakpoints[0].name;

    for (let i = 0; i < this._breakpoints.length; i++) {
      if (this._breakpoints[i].width <= width) {
        bpName = this._breakpoints[i].name;
      }
    }

    return bpName;
  }

  getBreakpointWidth(name: string): number | null {
    let bp = this._breakpoints.find((bp: Breakpoint) => bp.name === name);
    return !bp ? null : bp.width;
  }

  getNextBreakpoint(name: string): Breakpoint | null {
    let idx = this._breakpoints.findIndex((bp: Breakpoint) => bp.name === name);

    // return undefined if breakpoint wasn't found or if we're alredy on the
    // last breakpoint
    if (idx === -1 || idx + 1 === this._breakpoints.length) return null;

    return this._breakpoints[idx + 1];
  }

  getNextBreakpointName(name: string): string | null {
    let next = this.getNextBreakpoint(name);
    return next ? next.name : null;
  }

  getNextBreakpointWidth(name: string): number | null {
    let next = this.getNextBreakpoint(name);
    return next ? next.width : null;
  }

  shouldRender({
    breakpointName,
    modifier,
    currentBreakpointName,
    currentWidth,
    customQuery,
  }: any): boolean {
    if (modifier === "only") {
      if (breakpointName === currentBreakpointName) return true;
    } else if (modifier === "up") {
      const breakpointWidth = this.getBreakpointWidth(breakpointName);
      if (currentWidth >= breakpointWidth!) return true;
    } else if (modifier === "down") {
      const nextBreakpointWidth = this.getNextBreakpointWidth(breakpointName);
      if (nextBreakpointWidth === null || currentWidth < nextBreakpointWidth!)
        return true;
    } else if (customQuery) {
      return isBrowser && window.matchMedia(customQuery).matches;
    }
    return false;
  }
}

const B = new BreakpointUtils();
export default B;
