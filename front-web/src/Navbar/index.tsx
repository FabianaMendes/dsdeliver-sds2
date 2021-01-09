import './styles.css';
import { ReactComponent as Logo } from './logo.svg'; /*Importa e renomeia o componente React puxando do arquivo logosvg */
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navBar">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default Navbar;