import { useState } from "react";
import useComponentVisible from "hooks/useComponentVisible";

import { FaUserCog, FaCog, FaSignOutAlt } from "react-icons/fa";

// an avatar icon with a small down caret
// when clicked, a dropdown appears underneath, right aligned with the icon
// the dropdown has 2 links: settings & icon
// both links open modals
// manages its own state because nothing else needs to use or control it

const AppDropdown = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div className="dropdown" ref={ref}>
      <button
        className="dropdown__control"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <FaUserCog size={"2em"} />
      </button>
      {isComponentVisible ? (
        <div className="dropdown__menu">
          <ul className="dropdown__list">
            <li className="dropdown__item">
              <a className="icon-link" href="#">
                <div className="icon-link__icon">
                  <FaCog />
                </div>
                Settings
              </a>
            </li>
            <li className="dropdown__item">
              <a className="dropdown__link">
                <a className="icon-link" href="#">
                  <div className="icon-link__icon">
                    <FaSignOutAlt />
                  </div>
                  Sign Out
                </a>
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default AppDropdown;
