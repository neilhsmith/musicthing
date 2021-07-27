import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { BreakpointProvider, Breakpoint } from "common/Breakpoint";

import logo from "app/logo.svg";
import HamburgerButton from "common/HamburgerButton";

import Navigation from "features/app/Navigation";

import LibraryView from "features/library/LibraryView";
import SearchView from "features/search/SearchView";

import { sidebarOpenSelector, toggleSidebar } from "features/app/appSlice";

function PlayerPage() {
  const dispatch = useDispatch();

  const sidebarOpen = useSelector(sidebarOpenSelector);

  return (
    <BreakpointProvider>
      <div className="page page--player">
        <header className="header">
          <div className="header__titlebar">
            <div className="logo">
              <img className="logo__img" src={logo} alt="logo" />
              <h1 className="logo__title">MusicThing</h1>
            </div>
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
