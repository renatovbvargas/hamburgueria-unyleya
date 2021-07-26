import MenuItem from '../../components/MenuItem';

import HamburgerCard1 from '../../img/hamburgercard1.jpg';
import HamburgerCard2 from '../../img/hamburgercard2.jpg';
import HamburgerCard3 from '../../img/hamburgercard3.jpg';
import HamburgerCard4 from '../../img/hamburgercard4.jpg';

import './styles.css';

const Menu = () => {
    return (
        <main className='container-page container-menu'>
            <MenuItem image={HamburgerCard1} text={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
            <MenuItem image={HamburgerCard2} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
            <MenuItem image={HamburgerCard3} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
            <MenuItem image={HamburgerCard4} text={"Some quick example text to build on the card title and make up the bulk of the card's content."} />
        </main>
    )
}

export default Menu;