import "./Form.scss";

export const Form = ({
  onSubmitHandler,
  handleCommentInputChange,
  formValues,
}) => {
  return (
    <form onSubmit={onSubmitHandler} id="form" class="form">
      <div class="form__image"></div>
      <div class="form__container">
        <label class="form__label" for="addComment">
          JOIN THE CONVERSATION
        </label>
        <div className="form__inner-container">
          <textarea
            class="form__input form__input--resize"
            name="text"
            id="addComment"
            cols="30"
            rows="10"
            required
            placeholder="Add a new comment"
            onChange={handleCommentInputChange}
            value={formValues.comment}
          ></textarea>

          <label htmlFor="submit" class="form__button-label">
            <button class="form__button" id="submit" type="submit">
              COMMENT
            </button>
          </label>
        </div>
      </div>
    </form>
  );
};
