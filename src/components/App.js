import React, {useEffect, useState} from "react"
import '../index.css'
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import ImagePopup from "./ImagePopup"
import PopupWithForm from "./PopupWithForm"
import EditProfilePopup from "./EditProfilePopup"
import {CurrentUserContext} from "../contexts/CurrentUserContext"
import {api} from "../utils/Api"

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [cards, setCards] = useState([])
  const [currentUser, setCurrentUser] = useState({}) // context variable

  // to render cards and user data
  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData)
        setCards(cards)
      })
      .catch(err => console.log("There is an error:", err))
  }, [])

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

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
    })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {setCards( (cards) => cards.filter((i) => i._id !== card._id))})
      .catch((err) => {console.log("There is an error while deleting:", err)})
  }

  function handleUpdateUser (profileInputsData) {
    console.log('ок')
    api.sendUserData(profileInputsData.name, profileInputsData.about)
      .then((res) => {setCurrentUser(res)})
      .catch((err) => {console.log("There is an error while updating profile:", err) })
      .finally(() => {closeAllPopups()})
  }

  return (
    <CurrentUserContext.Provider value={currentUser}> {/*  value to provide from App to below components */}
      <>
        <Header />
        <Main cards={cards}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}/>
        <Footer />

        {/*  Popup Edit */}
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

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
    </CurrentUserContext.Provider>
  )
}

export default App