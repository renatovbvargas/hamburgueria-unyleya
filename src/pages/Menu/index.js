import MenuItem from '../../components/MenuItem';

import HamburgerCard1 from '../../img/hamburgercard1.jpg';
import HamburgerCard2 from '../../img/hamburgercard2.jpg';
import HamburgerCard3 from '../../img/hamburgercard3.jpg';
import HamburgerCard4 from '../../img/hamburgercard4.jpg';

import './styles.css';

const Menu = () => {

    const hamburgers = [
        {
            image: HamburgerCard1,
            text: "Um sanduíche com uma faca enfiada no meio num prato quadrado. Tem um pote com um molho e um tomate cereja."
        },
        {
            image: HamburgerCard2,
            text: "Nesse o pão é meio molenga. O recheio parece mais um macarrão com molho de carne moída. Ao fundo uma caipirinha."
        },
        {
            image: HamburgerCard3,
            text: "Aqui o recheio não cabe dentro do pão. Parece que o sanduíche está gritando com você. Mas parece gostoso."
        },
        {
            image: HamburgerCard4,
            text: "Parece uma medusa não parece? Tem um espeto para segurar e sair bem na foto. Ao fundo umas batatas fritas."
        },
    ]

    return (
        <main className='container-page container-menu'>
            {
                hamburgers.map((hamburger, index) =>
                    <MenuItem key={index} image={hamburger.image} text={hamburger.text} />
                )
            }
        </main>
    )
}

export default Menu;