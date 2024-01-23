import { NavLink } from 'react-router-dom';
import logoHeader from '../assets/logo.svg';

function Header() {
  return (
    <div className="Header">
      <img src={logoHeader} alt="Logo" className="logo" />
      <nav>
        <NavLink to="/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          À Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
