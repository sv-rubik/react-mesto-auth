import React, { useState } from "react"
import '../index.css'
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import ImagePopup from "./ImagePopup"
import PopupWithForm from "./PopupWithForm"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsImagePopupOpen(false)
  }

  const handleCardClick = (card) => {
    setSelectedCard({
      ...selectedCard,
      name: card.name,
      link: card.link
    })
    setIsImagePopupOpen(true)
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
        onCardClick = {handleCardClick}/>
      <Footer />

      {/*  Popup Edit */}
      <PopupWithForm id="popup-edit" name="profile-form" title="Редактировать профиль" formID="profile"
                    btnText = 'Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
            <label className="popup__label" htmlFor="profile-name">
              <input
                className="popup__input"
                type="text"
                id="profile-name"
                name="name"
                placeholder="ФИО"
                minLength={2}
                maxLength={40}
                required=""
              />
              <span className="popup__error" id="profile-name-error"/>
            </label>
            <label className="popup__label" htmlFor="profile-description">
              <input
                className="popup__input"
                type="text"
                id="profile-description"
                name="description"
                placeholder="Профессия"
                minLength={2}
                maxLength={200}
                required=""
              />
              <span className="popup__error" id="profile-description-error"/>
            </label>
          </fieldset>
      </PopupWithForm>

      {/*  Popup Add */}
      <PopupWithForm id="popup-add" name="card-form" title="Новое место" formID="new-cards"
                     btnText = 'Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <label htmlFor="card-name" className="popup__label">
            <input className="popup__input" type="text" id="card-name" name="title" placeholder="Название"
                   minLength={1} maxLength={30} required=""/>
            <span className="popup__error" id="card-name-error"/>
          </label>
          <label htmlFor="card-link" className="popup__label">
            <input className="popup__input" type="url" id="card-link" name="link" placeholder="Ссылка на картинку"
                   required=""/>
            <span className="popup__error" id="card-link-error"/>
          </label>
        </fieldset>
      </PopupWithForm>

        {/*  Popup Image */}
      <ImagePopup id="popup-image" card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>

        {/* Popup Card delete */}
      <div className="popup" id="popup-delete">
        <div className="popup__container">
          <button className="popup__close-btn" type="button"/>
          <h2 className="popup__heading">Вы уверены?</h2>
          <form className="popup__form" name="card-delete" noValidate="">
            <button className="popup__save-btn" type="submit" aria-label="Подтвердить удаление">Да</button>
          </form>
        </div>
      </div>

        {/* Popup Avatar */}
      <PopupWithForm id="popup-avatar" name="avatar-form" title="Обновить аватар" formID=""
                     btnText = 'Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <label className="popup__label" htmlFor="avatar-input">
            <input
              className="popup__input"
              id="avatar-input"
              name="avatar"
              type="url"
              placeholder="Ссылка на аватар"
              required=""
            />
            <span className="popup__error" id="avatar-input-error"/>
          </label>
        </fieldset>
      </PopupWithForm>
    </>
  )
}

export default App