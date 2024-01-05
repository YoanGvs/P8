import { Link } from 'react-router-dom';
import logoHeader from '../assets/logo.svg';

function Header() {
    return (
        <div className="Header">
            <img src={logoHeader} alt="Logo" className='logo' />
            <nav>
                <Link to="/">ACCUEIL</Link>
                <Link to="/about">A PROPOS</Link>
            </nav>
        </div>
    );
}

export default Header;
