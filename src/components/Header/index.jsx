import { Link } from 'react-router-dom'


function Header() {
    return (
        <nav className='Header'>
            <Link to="/">Accueil</Link>
            <Link to="/about">About</Link>
        </nav>
    )
}

export default Header