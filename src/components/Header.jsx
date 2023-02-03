import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <p className="logo" >App Patrimonio</p>
                <ul className='desktop-menu'>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Sugerencias</a></li>
                    <li><Link to="/login">Iniciar sesión</Link></li>
                </ul>
                <ul className='mobile-menu'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;