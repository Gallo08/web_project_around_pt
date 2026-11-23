import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._form = this._popup.querySelector(".popup__form");
    this._submitButton = this._form.querySelector(".popup__button");
    this._submitButtonText = this._submitButton.textContent;
  }

  setSubmitAction(handleSubmit) {
    this._handleSubmit = handleSubmit;
  }

  renderLoading(isLoading) {
    this._submitButton.textContent = isLoading
      ? "Excluindo..."
      : this._submitButtonText;

    this._submitButton.disabled = isLoading;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
}
