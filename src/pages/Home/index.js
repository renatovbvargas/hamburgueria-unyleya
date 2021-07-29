import HamburgerHome from '../../img/hamburgerhome.jpg';
import Ifood from '../../img/IFood_logo.svg.png';
import './styles.css';
import Depoimento from '../../components/Depoimento';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container-page container-home'>
            <div className='img-container-home'>
                <img src={HamburgerHome} alt='HamburguerHome' />
                <div className='ifood'>
                    <h1>Em breve no </h1>
                    <img src={Ifood} alt='IFood'/>
                </div>
            </div>
            <div className='container-depoimento-home'>
                <Depoimento size={6} />
                <Link to='/depoimentos'><h3 className='link-depoimentos'>Ver todos os depoimentos...</h3></Link>
            </div>
        </div>
    )
}

export default Home;
