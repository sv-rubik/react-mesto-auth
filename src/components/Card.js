import React from 'react'

function Card (props) {

  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <li className="element" >
      <img className="element__image" src={props.link} alt={props.name} onClick={handleClick}/>
      <button className="element__trash" type="button" aria-label="удалить фотографию"></button>
      <div className="element__description">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__likes">
          <button className="element__like" type="button" aria-label="поставить лайк"></button>
          <p className="element__likes-counter">{props.likes}</p>
        </div>
      </div>
    </li>
  )
}

export default Card