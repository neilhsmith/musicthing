import { useState, useEffect, SyntheticEvent } from "react";
import { useHistory } from "react-router";
import { useAppDispatch } from "app/hooks";

import { login, logout } from "features/auth/authSlice";

import Logo from "common/Logo";

// TODO
// - disable button when pending
// - display errors from state

function LoginPage() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    // reset login status
    dispatch(logout);
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Array<string>>([]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!username || !password) {
      let newErrors: string[] = [];
      if (!username) newErrors.push("A username is required");
      if (!password) newErrors.push("A password is required");

      setErrors(newErrors);
      return;
    }

    dispatch(login({ username, password })).then(() => {
      history.push("/");
    });
  };

  const renderErrors = () => {
    if (!errors.length) return;

    return (
      <div className="form-errors">
        <ul className="form-errors__list">
          {errors.map((error: string) => (
            <li key={error} className="form-errors__item">
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="page page--login">
      <div className="login">
        <div className="login__header">
          <Logo />
        </div>
        <div className="login__form">
          {renderErrors()}
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label className="form__label" htmlFor="username">
                Username
              </label>
              <input
                className="form__input form__input--text"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="password">
                Password
              </label>
              <input
                className="form__input form__input--password"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form__group">
              <button className="form__submit" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
