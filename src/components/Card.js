class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleLikeClick,
    handleDeleteClick,
    userId,
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._owner = data.owner;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleLike() {
    this._handleLikeClick(this._id, this._isLiked);
  }

  setLikeStatus(isLiked) {
    this._isLiked = isLiked;

    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_is-active", isLiked);
  }

  _handleDelete() {
    this._handleDeleteClick(this._id);
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _handleOpenPopup() {
    this._handleCardClick({
      name: this._name,
      link: this._link,
    });
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDelete();
      });

    this._cardImage.addEventListener("click", () => {
      this._handleOpenPopup();
    });
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".card__image");

    this._element.querySelector(".card__title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this.setLikeStatus(this._isLiked);
    if (this._owner !== this._userId) {
      this._element.querySelector(".card__delete-button").hidden = true;
    }

    this._setEventListeners();

    return this._element;
  }
}
export default Card;
