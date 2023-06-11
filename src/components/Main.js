import React, {useState, useEffect} from "react"
import {api} from '../utils/Api'
import Card from './Card'

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)
        setCards(initialCards)
      })
      .catch(err => console.log("There is an error:", err))
  }, [])

  return (
    <main className="main">
      {/*  Section profile  */}
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-zone">
          <img className="profile__avatar-image" src={userAvatar} alt="Аватар пользователя"/>
          <button className="profile__avatar-edit-btn" type="button" aria-label="Редактировать аватар"
                  onClick={onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль"
                  onClick={onEditProfile}/>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить фотографию"
                onClick={onAddPlace}/>
      </section>
      {/*  Section elements  */}
      <section className="elements" aria-label="Галерея фотографий интересных мест в России">
        <ul className="elements-grid">
          {cards.map((card) => (
            <Card card={card} key={card._id} link={card.link} name={card.name} likes={card.likes.length}
                  onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main