const popupProfile = document.getElementById("popup__profile");
const popupAddCard = document.getElementById("popup__add-card");
const popupCloseArr = document.querySelectorAll(".popup__close");
const btnOpenProfile = document.querySelector(".profile__edit-button");
const popupImg = document.querySelector(".popup__full-image");
const popupDesc = document.querySelector(".popup__image-title");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about-yourself");
const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputAbout = document.querySelector(".popup__input_type_about");
const profileInfo = document.querySelector(".profile__info");
const popupInfoContainer = document.querySelector(".popup__info-container");
const formAddCardInfo = document.querySelector(".popup__add-new-card-info");
const profileAddBtn = document.querySelector(".profile__add-button");
const galleryBlock = document.querySelector(".gallery__blocks");
const cardPopup = document.getElementById("popup__add-card");
const pictureTitleInput = document.querySelector(".popup__input_picture-title");
const pictureLinkInput = document.querySelector(".popup__input_picture-link");
const popupFullImage = document.getElementById("popup__full-size-picture");
let activePopup = null;
const submitButton = formAddCardInfo.querySelector("button[type=submit]");
const imageError = document.getElementById("image-error");
const imageTextError = document.getElementById("image-text-error");
submitButton.disabled = true;
const nameError = document.getElementById("name-error");
const aboutYourselfError = document.getElementById("about-yourself-error");
const submitButtonProfile = popupInfoContainer.querySelector(
  "button[type=submit]"
);

//import {Section} from './Section.js'

submitButtonProfile.disabled = true;

const closeByEscape = (e) => {
  if (e.key === "Escape") {
    if (activePopup !== null) closePopup(activePopup);
  }
};

const openPopup = (currentPopup) => {
  currentPopup.classList.add("popup_opened");
  activePopup = currentPopup;
  document.addEventListener("keyup", closeByEscape);
};

const closePopup = (currentPopup) => {
  currentPopup.classList.remove("popup_opened");
  activePopup = null;
  document.removeEventListener("keyup", closeByEscape);
};
const imgContainer = document.querySelector('.popup__image-container')
const popupOpenImage = new PopupWithImage(popupFullImage);
popupOpenImage.setEventListeners();

// const openFullImage = ({ name, link }) => {
//   popupImg.src = link;
//   popupImg.alt = name;
//   popupDesc.textContent = name;

//   openPopup(popupFullImage);
// };

const createNewCard = (data) => {
  const tempCard = new Card(data, "gallery-template");
  return tempCard.createCard();
}

const cards = new Section({
  items: [],
  renderer: (items) => {
    const card = createNewCard(items)
    cards.addItem(card)
  }
} , '.gallery__blocks')

cards.render(initialCards)



// const addNewCard = (cardProps, isNewCard = false) => {
//   const tempCard = new Card(cardProps, "gallery-template");
//   const cardElement = tempCard.createCard();
//   if (isNewCard)
//     galleryBlock.insertBefore(cardElement, galleryBlock.firstChild);
//   else galleryBlock.append(cardElement);
// };

btnOpenProfile.addEventListener("click", function () {
  openPopup(popupProfile);

  popupInputName.value = profileName.textContent;
  popupInputAbout.value = profileAbout.textContent;
});

// for (const closeBtn of popupCloseArr) {
//   closeBtn.addEventListener("click", () => {
//     closePopup(closeBtn.closest(".popup"));
//   });
// }

profileAddBtn.addEventListener("click", () => {
  openPopup(cardPopup);
});

function handleLikeBtn(evt) {
  evt.target.classList.toggle("gallery__like-button_active");
}

function editProfileSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileAbout.textContent = popupInputAbout.value;
  closePopup(popupProfile);
}

function addCardHandler(evt) {
  evt.preventDefault();
  closePopup(popupAddCard);
  const tempObj = {
    name: pictureTitleInput.value,
    link: pictureLinkInput.value,
  };
  evt.target.reset();
  const item = createNewCard(tempObj)
  cards.addItem(item)
 // addNewCard(tempObj, true);
}

popupInfoContainer.addEventListener("submit", editProfileSubmitHandler);

formAddCardInfo.addEventListener("submit", addCardHandler);

const popups = document.querySelectorAll(".popup");

// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     console.log("click");
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(popup);
//     }
//   });
// });

// initialCards.forEach((cardData) => {
//   addNewCard(cardData);
// });
