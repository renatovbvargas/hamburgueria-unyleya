import { Link } from "react-router-dom";

import './styles.css';

const Header = () => {
    return (
        <header className='container-header'>
            <h1><Link to='/'>Hamburgueria Unyleya</Link></h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cardapio'>Cardápio</Link></li>
                <li><Link to='/videos'>Vídeos</Link></li>
            </ul>
        </header>
    )
}

export default Header;