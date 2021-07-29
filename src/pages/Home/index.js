import HamburgerHome from '../../img/hamburgerhome.jpg';
import './styles.css';
import Depoimento from '../../components/Depoimento';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container-page container-home'>
            <div className='img-container-home'>
                <img src={HamburgerHome} alt='HamburguerHome' />
                <h1>EM BREVE...</h1>
            </div>
            <div className='container-depoimento-home'>
                <Depoimento size={6} />
                <Link to='/depoimentos'><h3 className='link-depoimentos'>Ver todos os depoimentos...</h3></Link>
            </div>
        </div>
    )
}

export default Home;
