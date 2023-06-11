import '../index.css'
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
        {/*  Popup Edit */}
      <div className="popup" id="popup-edit">
        <div className="popup__container">
          <button className="popup__close-btn" type="button"/>
          <h2 className="popup__heading">Редактировать профиль</h2>
          <form className="popup__form" id="profile" name="profile-form">
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
            <button
              className="popup__save-btn"
              type="submit"
              aria-label="Сохранить изменения в профиле"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
        {/*  Popup Add */}
      <div className="popup" id="popup-add">
        <div className="popup__container">
          <button className="popup__close-btn" type="button"/>
          <h2 className="popup__heading">Новое место</h2>
          <form className="popup__form" id="new-cards" name="card-form">
            <fieldset className="popup__fieldset">
              <label htmlFor="card-name" className="popup__label">
                <input
                  className="popup__input"
                  type="text"
                  id="card-name"
                  name="title"
                  placeholder="Название"
                  minLength={1}
                  maxLength={30}
                  required=""
                />
                <span className="popup__error" id="card-name-error"/>
              </label>
              <label htmlFor="card-link" className="popup__label">
                <input
                  className="popup__input"
                  type="url"
                  id="card-link"
                  name="link"
                  placeholder="Ссылка на картинку"
                  required=""
                />
                <span className="popup__error" id="card-link-error"/>
              </label>
            </fieldset>
            <button
              className="popup__create-btn popup__save-btn popup__save-btn_disabled"
              type="submit"
              aria-label="Создать новую фотографию"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
        {/*  Popup Image */}
      <div className="popup popup_dark-overlay" id="popup-image">
        <div className="popup__container-image">
          <img className="popup__image" src="mesto-react/src/components/App#" alt="#"/>
          <p className="popup__image-caption"/>
          <button className="popup__close-btn" type="button"/>
        </div>
      </div>
        {/* Popup Card delete */}
      <div className="popup" id="card-delete">
        <div className="popup__container">
          <button className="popup__close-btn" type="button"/>
          <h2 className="popup__heading">Вы уверены?</h2>
          <form className="popup__form" name="card-delete" noValidate="">
            <button
              className="popup__save-btn"
              type="submit"
              aria-label="Подтвердить удаление"
            >
              Да
            </button>
          </form>
        </div>
      </div>
        {/* Popup Avatar */}
      <div className="popup" id="popup-avatar">
        <div className="popup__container">
          <button className="popup__close-btn" type="button"/>
          <h2 className="popup__heading">Обновить аватар</h2>
          <form className="popup__form" name="avatar-form">
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
            <button
              className="popup__save-btn popup__save-btn_disabled"
              type="submit"
              aria-label="Сохранить аватар"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
        {/*  Template */}
      <template id="card-template"/>
    </>
  )
}

export default App
