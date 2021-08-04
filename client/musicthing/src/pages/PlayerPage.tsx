import { useAppSelector, useAppDispatch } from "app/hooks";
import { Switch, Route } from "react-router-dom";

import { BreakpointProvider, Breakpoint } from "common/Breakpoint";

import Logo from "common/Logo";
import HamburgerButton from "common/HamburgerButton";

import Navigation from "features/app/Navigation";

import LibraryView from "features/library/LibraryView";
import SearchView from "features/search/SearchView";

import { sidebarOpenSelector, toggleSidebar } from "features/app/appSlice";

function PlayerPage() {
  const sidebarOpen = useAppSelector(sidebarOpenSelector);
  const dispatch = useAppDispatch();

  return (
    <BreakpointProvider>
      <div className="page page--player">
        <header className="header">
          <div className="header__titlebar">
            <Logo />
            <Breakpoint small down>
              <HamburgerButton
                active={sidebarOpen}
                onClick={() => dispatch(toggleSidebar())}
              />
            </Breakpoint>
          </div>
          <Breakpoint medium up>
            <div className="header__actionbar">action bar</div>
          </Breakpoint>
        </header>
        <main className="main">
          <aside
            className={`main__sidebar sidebar ${
              sidebarOpen ? "main__sidebar--open" : ""
            }`}
          >
            <Breakpoint small down>
              <div className="sidebar__panel">search</div>
            </Breakpoint>
            <div className="sidebar__panel">
              <Navigation />
            </div>
          </aside>
          <div className="main__body body">
            <Switch>
              <Route exact path="/">
                <LibraryView />
              </Route>
              <Route path="/search">
                <SearchView />
              </Route>
              <Route path="/explore">
                <h2>Coming soon</h2>
              </Route>
              <Route path="/blocked">
                <h2>Coming soon</h2>
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </BreakpointProvider>
  );
}

export default PlayerPage;
