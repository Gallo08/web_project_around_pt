import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
let userId;

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "7d5671ce-b85e-4240-92bb-eb93c09c7db3",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

const confirmationPopup = new PopupWithConfirmation("#confirmation-popup");
confirmationPopup.setEventListeners();

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

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
  profilePopup.renderLoading(true);

  api
    .editUserInfo({
      name: formValues.name,
      about: formValues.description,
    })
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        description: userData.about,
      });

      profilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profilePopup.renderLoading(false);
      profileFormValidator.resetValidation();
    });
});

const cardPopup = new PopupWithForm("#new-card-popup", (formValues) => {
  cardPopup.renderLoading(true);

  api
    .addCard({
      name: formValues["place-name"],
      link: formValues.link,
    })
    .then((cardData) => {
      const cardElement = getCardElement(cardData);

      cardSection.addItem(cardElement);
      cardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardPopup.renderLoading(false);
      newCardFormValidator.resetValidation();
    });
});

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

const avatarButton = document.querySelector(".profile__avatar-button");
const avatarForm = document.querySelector("#avatar-popup .popup__form");

const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();

const avatarPopup = new PopupWithForm("#avatar-popup", (formValues) => {
  avatarPopup.renderLoading(true);

  api
    .editAvatar(formValues.avatar)
    .then((userData) => {
      userInfo.setAvatar(userData.avatar);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.renderLoading(false);
      avatarFormValidator.resetValidation();
    });
});

avatarPopup.setEventListeners();

avatarButton.addEventListener("click", () => {
  avatarForm.reset();
  avatarFormValidator.resetValidation();
  avatarPopup.open();
});

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

function getCardElement(cardData) {
  const card = new Card(
    cardData,
    "#card-template",
    (imageData) => {
      imagePopup.open(imageData);
    },
    (cardId, isLiked) => {
      api
        .changeLikeCardStatus(cardId, isLiked)
        .then((updatedCard) => {
          card.setLikeStatus(updatedCard.isLiked);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    (cardId) => {
      confirmationPopup.setSubmitAction(() => {
        confirmationPopup.renderLoading(true);

        api
          .deleteCard(cardId)
          .then(() => {
            card.removeCard();
            confirmationPopup.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            confirmationPopup.renderLoading(false);
          });
      });

      confirmationPopup.open();
    },
    userId,
  );

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
    items: [],
    renderer: (item) => {
      const cardElement = getCardElement(item);
      cardSection.addItem(cardElement);
    },
  },
  ".cards__list",
);

api
  .getInitialData()
  .then(([userData, cards]) => {
    userId = userData._id;
    userInfo.setUserInfo({
      name: userData.name,
      description: userData.about,
    });

    userInfo.setAvatar(userData.avatar);
    cardSection.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });
