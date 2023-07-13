import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo.svg'
import React from "react"

function Header ({isLoggedIn, logOut, email}) {
  const location = useLocation()
  const path = (location.pathname === "/sign-in") ? "/sign-up" : "/sign-in"
  const headerLink = (location.pathname === "/sign-in") ? "Регистрация" : "Войти"

  return (
    <header className="header">
      <a className="header__link" href="mesto-react-auth/src/components/App#">
        <img className="header__logo" src={logo} alt="логотип проекта 'Место'"/>
      </a>

      <div className="header__auth">
        {/*if authorized, render below*/}
        {isLoggedIn ? (
          <>
            <p className="header__link">{email}</p>
            <Link className="header__link"  to='/sign-in' onClick={logOut}>Выйти</Link>
          </>
        ) : (
            <Link className="header__link" to={path}>{headerLink}</Link>
        )}
      </div>
    </header>
  )
}

export default Header