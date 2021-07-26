import { useState } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";

import { BreakpointProvider, Breakpoint } from "common/Breakpoint";

import { FaMusic, FaSearch, FaCompass, FaRegEyeSlash } from "react-icons/fa";
import logo from "../app/logo.svg";

import LibraryView from "features/library/LibraryView";
import SearchView from "features/search/SearchView";

function PlayerPage() {
  let [navIsOpen, setNavIsOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

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
              <button
                className={`hamburger ${navIsOpen ? "hamburger--open" : ""}`}
                onClick={() => setNavIsOpen(!navIsOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </Breakpoint>
          </div>
          <Breakpoint medium up>
            <div className="header__actionbar">action bar</div>
          </Breakpoint>
        </header>
        <main className="main">
          <aside
            className={`main__sidebar sidebar ${
              navIsOpen ? "main__sidebar--open" : ""
            }`}
          >
            <div className="sidebar__panel">
              <nav className="nav">
                <ul className="nav__list">
                  <li
                    className={`nav__list-item ${
                      pathname === "/" ? "nav__list-item--active" : ""
                    }`}
                  >
                    <Link
                      className="nav__link"
                      to="/"
                      onClick={() => setNavIsOpen(false)}
                    >
                      <div className="nav__icon">
                        <FaMusic />
                      </div>
                      Library
                    </Link>
                  </li>
                  <li
                    className={`nav__list-item ${
                      pathname === "/search" ? "nav__list-item--active" : ""
                    }`}
                  >
                    <Link
                      className="nav__link"
                      to="/search"
                      onClick={() => setNavIsOpen(false)}
                    >
                      <div className="nav__icon">
                        <FaSearch />
                      </div>
                      Search
                    </Link>
                  </li>
                  <li
                    className={`nav__list-item ${
                      pathname === "/explore" ? "nav__list-item--active" : ""
                    }`}
                  >
                    <Link
                      className="nav__link"
                      to="/explore"
                      onClick={() => setNavIsOpen(false)}
                    >
                      <div className="nav__icon">
                        <FaCompass />
                      </div>
                      Explore
                    </Link>
                  </li>
                  <li
                    className={`nav__list-item ${
                      pathname === "/blocked" ? "nav__list-item--active" : ""
                    }`}
                  >
                    <Link
                      className="nav__link"
                      to="/blocked"
                      onClick={() => setNavIsOpen(false)}
                    >
                      <div className="nav__icon">
                        <FaRegEyeSlash />
                      </div>
                      Blocked
                    </Link>
                  </li>
                </ul>
              </nav>
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
