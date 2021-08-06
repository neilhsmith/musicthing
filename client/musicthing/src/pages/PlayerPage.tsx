import { useAppSelector, useAppDispatch } from "app/hooks";
import { Switch, Route } from "react-router-dom";

import { BreakpointProvider, Breakpoint } from "common/Breakpoint";

import Logo from "common/Logo";
import HamburgerButton from "common/HamburgerButton";

import Navigation from "features/app/Navigation";
import AppDropdown from "features/app/AppDropdown";

import LibraryView from "features/library/LibraryView";
import SearchView from "features/search/SearchView";

import { sidebarOpenSelector, toggleSidebar } from "features/app/appSlice";

function PlayerPage() {
  return (
    <BreakpointProvider>
      <div className="page page--player">
        <header className="header">
          <div className="header__titlebar">
            <Logo />
            <Breakpoint small down>
              <SidebarDrawerButton />
            </Breakpoint>
          </div>
          <Breakpoint medium up>
            <div className="header__actionbar">
              <div>searchbar</div>
              <AppDropdown />
            </div>
          </Breakpoint>
        </header>
        <main className="main">
          <Sidebar />
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

function SidebarDrawerButton() {
  const sidebarOpen = useAppSelector(sidebarOpenSelector);
  const dispatch = useAppDispatch();

  return (
    <HamburgerButton
      active={sidebarOpen}
      onClick={() => dispatch(toggleSidebar())}
    />
  );
}

function Sidebar() {
  const sidebarOpen = useAppSelector(sidebarOpenSelector);

  return (
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
      <Breakpoint small down style={{ marginTop: "auto" }}>
        <div className="sidebar__panel sidebar__panel--bottom">
          settings / logout
        </div>
      </Breakpoint>
    </aside>
  );
}

export default PlayerPage;
