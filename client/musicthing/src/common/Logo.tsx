import logo from "app/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="logo" />
      <h1 className="logo__title">MusicThing</h1>
    </div>
  );
};

export default Logo;
