import './styles.css';
import Depoimento from '../../components/Depoimento';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Depoimentos = () => {

    const [nome, setNome] = useState('');
    const [depoimento, setDepoimento] = useState('');

    const dispatch = useDispatch();

    const adicionaDepoimento = async () => {

        const resp = await axios.post('https://hamburgueria-unyleya-api.herokuapp.com/depoimento', {
            nome,
            depoimento,
            data_hora: new Date()
        });


        dispatch({
            type: 'PUSH_DEPOIMENTO',
            payload: {
                depoimento: {
                    nome: resp.data.nome,
                    depoimento: resp.data.depoimento,
                    data_hora: resp.data.data_hora
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