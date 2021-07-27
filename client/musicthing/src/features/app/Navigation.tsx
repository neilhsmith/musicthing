import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { useCurrentWidth } from "common/Breakpoint";
import { toggleSidebar } from "./appSlice";

import { FaMusic, FaSearch, FaCompass, FaRegEyeSlash } from "react-icons/fa";

interface NavItem {
  to: string;
  name: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  {
    to: "/",
    name: "Library",
    icon: <FaMusic />,
  },
  {
    to: "/search",
    name: "Search",
    icon: <FaSearch />,
  },
  {
    to: "/explore",
    name: "Explore",
    icon: <FaCompass />,
  },
  {
    to: "/blocked",
    name: "Blocked",
    icon: <FaRegEyeSlash />,
  },
];

const Navigation = () => {
  const dispatch = useDispatch();

  const currentWidth = useCurrentWidth();

  const location = useLocation();
  const { pathname } = location;

  const toggleSidebarIfMobile = () => {
    // only toggle if the current viewport is mobile. the desktop always shows the
    // sidebar so no need to dispatch extra actions.
    if (currentWidth! <= 768) {
      dispatch(toggleSidebar());
    }
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item: NavItem) => {
          let className = `nav__list-item ${
            pathname === item.to ? "nav__list-item--active" : ""
          }`;
          return (
            <li key={item.to} className={className}>
              <Link
                className="nav__link"
                to={item.to}
                onClick={toggleSidebarIfMobile}
              >
                <div className="nav__icon">{item.icon}</div>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
