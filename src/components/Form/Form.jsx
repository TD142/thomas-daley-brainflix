import "./Form.scss";

export const Form = () => {
  return (
    <form id="form" class="form">
      <div class="form__image"></div>
      <div class="form__container">
        <label class="form__label" for="addComment">
          JOIN THE CONVERSATION
        </label>
        <textarea
          class="form__input form__input--resize"
          name="text"
          id="addComment"
          cols="30"
          rows="10"
          required
          placeholder="Add a new comment"
        ></textarea>

        <label for="submit" class="form__button-label">
          <button class="form__button" id="submit" type="submit">
            COMMENT
          </button>
        </label>
      </div>
    </form>
  );
};
