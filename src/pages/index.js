import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
});

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

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

const editPopup = document.querySelector("#edit-popup");

const profileForm = editPopup.querySelector(".popup__form");

const profileNameInput = editPopup.querySelector(".popup__input_type_name");

const profileDescriptionInput = editPopup.querySelector(
  ".popup__input_type_description",
);

const newCardPopup = document.querySelector("#new-card-popup");

const newCardForm = newCardPopup.querySelector("#new-card-form");

const profileFormValidator = new FormValidator(validationConfig, profileForm);

const newCardFormValidator = new FormValidator(validationConfig, newCardForm);

const profilePopup = new PopupWithForm("#edit-popup", (formValues) => {
  userInfo.setUserInfo({
    name: formValues.name,
    description: formValues.description,
  });

  profilePopup.close();
});

const cardPopup = new PopupWithForm("#new-card-popup", (formValues) => {
  const cardElement = getCardElement(formValues["place-name"], formValues.link);

  cardSection.addItem(cardElement);
  cardPopup.close();
});

profileFormValidator.setEventListeners();
newCardFormValidator.setEventListeners();

function fillProfileForm() {
  const profileData = userInfo.getUserInfo();

  profileNameInput.value = profileData.name;
  profileDescriptionInput.value = profileData.description;
}

function handleOpenEditModal() {
  fillProfileForm();
  profileFormValidator.resetValidation();
  profilePopup.open();
}

function getCardElement(name, link) {
  const card = new Card({ name, link }, "#card-template", (cardData) => {
    imagePopup.open(cardData);
  });

  return card.generateCard();
}

profileEditButton.addEventListener("click", handleOpenEditModal);

profileAddButton.addEventListener("click", function () {
  newCardForm.reset();
  newCardFormValidator.resetValidation();
  cardPopup.open();
});

profilePopup.setEventListeners();

cardPopup.setEventListeners();

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = getCardElement(item.name, item.link);
      cardSection.addItem(cardElement);
    },
  },
  ".cards__list",
);

cardSection.renderItems();
