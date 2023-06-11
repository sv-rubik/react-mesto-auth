function Main() {
  const handleEditAvatarClick = () => {
    const popup = document.querySelector("#popup-avatar")
    popup.classList.add('popup_opened')
  }

  const handleEditProfileClick = () => {
    const popup = document.querySelector("#popup-edit")
    popup.classList.add('popup_opened')
  }

  const handleAddPlaceClick = () => {
    const popup = document.querySelector("#popup-add")
    popup.classList.add('popup_opened')
  }

  return (
    <main className="main">
      {/*  Section profile  */}
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__avatar-zone">
          <img className="profile__avatar-image" src="mesto-react/src/components/App#" alt="Аватар пользователя"/>
          <button className="profile__avatar-edit-btn" type="button" aria-label="Редактировать аватар"
                  onClick={handleEditAvatarClick}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button className="profile__edit-btn" type="button" aria-label="Редактировать профиль"
                  onClick={handleEditProfileClick}/>
          <p className="profile__description"/>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить фотографию"
                onClick={handleAddPlaceClick}/>
      </section>
      {/*  Section elements  */}
      <section className="elements" aria-label="Галерея фотографий интересных мест в России">
        <ul className="elements-grid"></ul>
      </section>
    </main>
  )
}

export default Main