class Popup {
    constructor (selector) {
        this._selector = selector;
    }

    openPopup() {
        this._selector.classList.add("popup_opened");
        document.addEventListener("keyup", this._closeByEscape);
      };

    closePopup () {
        console.log(this._selector.classList);
        this._selector.classList.remove("popup_opened");
        document.removeEventListener("keyup", this._closeByEscape);
        document.removeEventListener("keyup", this._closeByClick);
      };

    _closeByEscape = (e) => {
        if (e.key === "Escape") {
          if (activePopup !== null) closePopup(activePopup);
        }
      };

      _closeByClick = (evt) => {
        if (evt.target.classList.contains("popup_opened") || evt.target.classList.contains('popup__close' )) {
            console.log('correct click');
            this.closePopup();
          }else{
            console.log('incorrect click');

          }
      }
      setEventListeners(){
        document.addEventListener('mousedown', this._closeByClick)
      }
      
   
      
    //   const openFullImage = ({ name, link }) => {
    //     popupImg.src = link;
    //     popupImg.alt = name;
    //     popupDesc.textContent = name;
      
    //     openPopup(popupFullImage);
    //   };
}

