import "./Header.scss";
import Logo from "../../assets/images/Logo/BrainFlix-logo.svg";

export const Header = () => {
  return (
    <nav className="nav">
      <img className="nav__image" src={Logo} alt="" />
      <div className="nav__container">
        <input
          className="nav__container-input"
          type="text"
          placeholder="Search"
        />

        <div className="nav__secondary-image"></div>
      </div>
      <button className="nav__button" type="submit">
        UPLOAD
      </button>
    </nav>
  );
};
