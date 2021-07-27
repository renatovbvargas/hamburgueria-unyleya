import HamburgerHome from '../../img/hamburgerhome.jpg';
import './styles.css';
import Depoimento from '../../components/Depoimento';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container-page container-home'>
            <img src={HamburgerHome} alt='HamburguerHome' />
            <div className='container-depoimento-home'>
                <Depoimento />
                <Link to='/depoimentos'><span>Adicione um depoimento...</span></Link>
            </div>
        </div>
    )
}

export default Home;
