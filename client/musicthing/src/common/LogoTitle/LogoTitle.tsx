import logo from "logo.svg";

import "./logo-title.styles.scss";

/**
 * Displays the app's logo and title.
 */

export default function LogoTitle() {
  return (
    <div className="logo-title">
      <img className="logo-title__img" src={logo} alt="logo" />
      <h1 className="logo-title__title">MusicThing</h1>
    </div>
  );
}
