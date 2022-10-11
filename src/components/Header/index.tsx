import "./styles.css";
import Logo from "../../assets/logo-negative.svg";
import Menu from "../../assets/menu-hamburger.png";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClickMenu = () => {
    setOpen(!open);
  };

  return (
    <header className='header'>
      <nav className={`header__nav ${open && "fullscreen-menu"}`}>
        <img className='header__logo' src={Logo} alt='logo' />
        <ul className={"header__group-links"}>
          <li className='header__link' onClick={() => handleClickMenu()}>
            Serviços
          </li>
          <li className='header__link' onClick={() => handleClickMenu()}>
            Sobre
          </li>
          <li className='header__link' onClick={() => handleClickMenu()}>
            Contato
          </li>
        </ul>
        <img
          className='header__menu'
          src={Menu}
          alt='menu'
          onClick={() => handleClickMenu()}
        />
      </nav>
    </header>
  );
};

export default Header;
