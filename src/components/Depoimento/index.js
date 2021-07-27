import './styles.css';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Depoimento = () => {

    const depoimentos = useSelector(states => states.DepoimentoReducer.depoimentos);

    return (
        <div className="container-depoimento">
            {
                depoimentos.map((depoimento, index) =>
                    <div key={index}>
                        <p>{depoimento.depoimento}</p>
                        <small>{`${depoimento.nome} - ${moment(depoimento.data_hora).format('DD/MM/yyyy HH:mm')}`}</small>
                    </div>
                )
            }
        </div>
    )
}

export default Depoimento;
