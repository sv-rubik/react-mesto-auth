import React from 'react'

function PopupWithForm(props) {
  return (
    <div className={`popup ${ props.isOpen ? 'popup_opened' : ''}`} id={props.id}>
      <div className="popup__container">
        <button className="popup__close-btn" type="button" onClick={props.onClose}/>
        <h2 className="popup__heading">{props.title}</h2>
        <form className="popup__form" name={props.name} id={props.formID}>
          {props.children}
          <button className="popup__create-btn popup__save-btn popup__save-btn_disabled" type="submit"
                  aria-label={props.title}>{props.btnText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm