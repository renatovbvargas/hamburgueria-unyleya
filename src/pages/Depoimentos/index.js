import './styles.css';
import Depoimento from '../../components/Depoimento';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Depoimentos = () => {

    const [nome, setNome] = useState('');
    const [depoimento, setDepoimento] = useState('');

    const dispatch = useDispatch();

    const adicionaDepoimento = () => {
        dispatch({
            type: 'PUSH_DEPOIMENTO',
            payload: {
                depoimento: {
                    nome,
                    depoimento,
                    data_hora: new Date()
                }
            }
        })
    }

    return (
        <main className='container-page container-depoimentos'>
            <div className='inner-container-depoimentos'>
                <Depoimento />
                <div className='form-depoimentos'>
                    <input type='text' placeholder='Seu nome' onChange={nome => setNome(nome.target.value)} />
                    <textarea type='textarea' placeholder='Adicionar um depoimento público...' onChange={depoimento => setDepoimento(depoimento.target.value)} />
                    <button onClick={adicionaDepoimento}>Adicionar</button>
                </div>
            </div>
        </main>
    )
}

export default Depoimentos;