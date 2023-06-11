import logo from '../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <a className="header__link" href="mesto-react/src/components/App#">
        <img className="header__logo" src={logo} alt="логотип проекта 'Место'"/>
      </a>
    </header>
  )
}

export default Header