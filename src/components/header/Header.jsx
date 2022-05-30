import "./Header.scss";
import Logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__outer-container">
          <Link to="/">
            <img className="nav__image" src={Logo} alt="BrainFlix Logo" />
          </Link>
          <div className="nav__container">
            <div className="nav__wrapper">
              <input
                className="nav__container-input"
                type="text"
                placeholder="Search"
              />

              <div className="nav__secondary-image"></div>
            </div>
            <Link to="/upload">
              <button className="nav__button" type="submit">
                UPLOAD
              </button>
            </Link>
            <div className="nav__secondary-image nav__secondary-image--tablet"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};
