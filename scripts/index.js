import Card from "./Card.js";
import { openModal, closeModal } from "./utils.js";
import FormValidator from "./FormValidator.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

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

const profileForm = editPopup.querySelector(".popup__form");

const profileNameInput = editPopup.querySelector(".popup__input_type_name");

const profileDescriptionInput = editPopup.querySelector(
  ".popup__input_type_description",
);

const newCardPopup = document.querySelector("#new-card-popup");

const newCardForm = newCardPopup.querySelector("#new-card-form");

const cardNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name",
);

const cardLinkInput = newCardPopup.querySelector(".popup__input_type_url");

const cardsList = document.querySelector(".cards__list");

const popups = document.querySelectorAll(".popup");

const profileFormValidator = new FormValidator(validationConfig, profileForm);

const newCardFormValidator = new FormValidator(validationConfig, newCardForm);

profileFormValidator.setEventListeners();
newCardFormValidator.setEventListeners();

function fillProfileForm() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  profileFormValidator.resetValidation();
  openModal(editPopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  closeModal(editPopup);
}

function getCardElement(name, link) {
  const card = new Card({ name, link }, "#card-template");

  return card.generateCard();
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);

  container.prepend(cardElement);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  renderCard(cardNameInput.value, cardLinkInput.value, cardsList);

  closeModal(newCardPopup);
}

profileEditButton.addEventListener("click", handleOpenEditModal);

profileAddButton.addEventListener("click", function () {
  newCardForm.reset();
  newCardFormValidator.resetValidation();
  openModal(newCardPopup);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

newCardForm.addEventListener("submit", handleCardFormSubmit);

popups.forEach(function (popup) {
  const closeButton = popup.querySelector(".popup__close");

  closeButton.addEventListener("click", function () {
    closeModal(popup);
  });

  popup.addEventListener("click", function (evt) {
    if (evt.target === popup) {
      closeModal(popup);
    }
  });
});
initialCards.forEach(function (card) {
  renderCard(card.name, card.link, cardsList);
});
