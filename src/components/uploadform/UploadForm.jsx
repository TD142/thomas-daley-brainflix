import "./UploadForm.scss";
import THUMBNAIL from "../../assets/images/Upload-video-preview.jpg";

export const UploadForm = () => {
  return (
    <div>
      <h1 className="uploadform__title">Upload Video</h1>
      <p className="uploadform__subtitle">VIDEO THUMBNAIL</p>
      <div className="uploadform__image-wrapper">
        <img className="uploadform__image" src={THUMBNAIL} alt="" />
      </div>
      <form id="form" class="uploadform">
        <div class="uploadform__container">
          <label class="uploadform__label" for="addComment">
            TITLE YOUR VIDEO
          </label>
          <input
            type="text"
            placeholder="Add a title to your video"
            id="addTitle"
            className="uploadform__input uploadform__input--height "
          />

          <label class="uploadform__label" for="addComment">
            ADD A VIDEO DESCRIPTION
          </label>
          <div className="uploadform__inner-container">
            <textarea
              className="uploadform__input uploadform__input--resize"
              name="text"
              id="addComment"
              cols="30"
              rows="10"
              required
              placeholder="Add a new comment"
            ></textarea>
            <div>
              <label htmlFor="submit" class="form__button-label">
                <button class="uploadform__button" id="submit" type="submit">
                  PUBLISH
                </button>
              </label>
            </div>
            <p className="uploadform__text">CANCEL</p>
          </div>
        </div>
      </form>
    </div>
  );
};
