import logo from "../app/logo.svg";

import { BreakpointProvider, Breakpoint } from "common/Breakpoint";

function PlayerPage() {
  return (
    <BreakpointProvider>
      <div className="page player-page">
        <div className="sidebar">
          <div className="logo">
            <img className="logo-img" src={logo} alt="logo" />
            <h1 className="logo-title">MusicThing</h1>
          </div>
        </div>
        <div className="right">
          <p>main</p>
          <Breakpoint xsmall only>
            <p>xsmall only</p>
          </Breakpoint>
          <Breakpoint small only>
            <p>small only</p>
          </Breakpoint>
          <Breakpoint medium only>
            <p>medium only</p>
          </Breakpoint>
          <Breakpoint large only>
            <p>large only</p>
          </Breakpoint>
          <Breakpoint xlarge only>
            <p>xlarge only</p>
          </Breakpoint>
          <Breakpoint xlarge down>
            <p>xlarge down</p>
          </Breakpoint>
        </div>
      </div>
    </BreakpointProvider>
  );
}

export default PlayerPage;
