const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");

const profileAddButton = document.querySelector(".profile__add-button");

const profileTitle = document.querySelector(".profile__title");

const profileDescription = document.querySelector(".profile__description");

const editPopup = document.querySelector("#edit-popup");

const editPopupCloseButton = editPopup.querySelector(".popup__close");

const profileForm = editPopup.querySelector(".popup__form");

const profileNameInput = editPopup.querySelector(".popup__input_type_name");

const profileDescriptionInput = editPopup.querySelector(
  ".popup__input_type_description",
);

const newCardPopup = document.querySelector("#new-card-popup");

const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close");

const newCardForm = newCardPopup.querySelector("#new-card-form");

const cardNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name",
);

const cardLinkInput = newCardPopup.querySelector(".popup__input_type_url");

const imagePopup = document.querySelector("#image-popup");

const imagePopupCloseButton = imagePopup.querySelector(".popup__close");

const imagePopupElement = imagePopup.querySelector(".popup__image");

const imagePopupCaption = imagePopup.querySelector(".popup__caption");

const cardsList = document.querySelector(".cards__list");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  closeModal(editPopup);
}

function getCardElement(
  name = "Lugar sem nome",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");

  const cardImage = cardElement.querySelector(".card__image");

  const cardLikeButton = cardElement.querySelector(".card__like-button");

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("card__like-button_is-active");
  });

  cardDeleteButton.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImage.addEventListener("click", function () {
    imagePopupCaption.textContent = name;
    imagePopupElement.src = link;
    imagePopupElement.alt = name;

    openModal(imagePopup);
  });

  return cardElement;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);

  container.prepend(cardElement);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  renderCard(cardNameInput.value, cardLinkInput.value, cardsList);

  closeModal(newCardPopup);
  evt.target.reset();
}

profileEditButton.addEventListener("click", handleOpenEditModal);

profileAddButton.addEventListener("click", function () {
  openModal(newCardPopup);
});

editPopupCloseButton.addEventListener("click", function () {
  closeModal(editPopup);
});

newCardPopupCloseButton.addEventListener("click", function () {
  closeModal(newCardPopup);
});

imagePopupCloseButton.addEventListener("click", function () {
  closeModal(imagePopup);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

newCardForm.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach(function (card) {
  renderCard(card.name, card.link, cardsList);
});
