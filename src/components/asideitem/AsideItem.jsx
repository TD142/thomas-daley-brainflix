import "./AsideItem.scss";
import { Link } from "react-router-dom";

export const AsideItem = ({ image, title, channel, id }) => {
  return (
    <Link className="aside__link" to={"/videos/" + id}>
      <article>
        <div className="aside__container">
          <div>
            <img className="aside__image" src={image} alt="videos preview" />
          </div>
          <div className="aside__inner-container">
            <p className="aside__text">{title}</p>
            <p className="aside__secondary-text">{channel}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
