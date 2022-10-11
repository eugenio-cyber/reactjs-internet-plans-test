import "./styles.css";
import Logo from "../../assets/logo-negative.svg";

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <img className='header__logo' src={Logo} alt='Logo' />
        <ul className='header__group-links'>
          <li className='header__link'>Serviços</li>
          <li className='header__link'>Sobre</li>
          <li className='header__link'>Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
