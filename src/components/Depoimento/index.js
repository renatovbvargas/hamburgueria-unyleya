import './styles.css';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Depoimento = (props) => {

    const depoimentos = useSelector(states => states.DepoimentoReducer.depoimentos);

    const depoimentosArray = () => {

        if (props.size && depoimentos.length > props.size)
            return depoimentos.slice(0, props.size - 1);

        return depoimentos;
    }

    return (
        <div className="container-depoimento">
            {
                depoimentosArray().map((depoimento, index) =>
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
