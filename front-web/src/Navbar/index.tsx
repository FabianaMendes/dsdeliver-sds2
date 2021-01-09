import './styles.css';
import { ReactComponent as Logo } from './logo.svg'; /*Importa e renomeia o componente React puxando do arquivo logosvg */

function Navbar() {
    return (
        <nav className="main-navBar">
            <Logo />
            <a href="#" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default Navbar;