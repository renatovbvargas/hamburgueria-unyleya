import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Reducers from './Reducers';

const store = createStore(Reducers);

const inicializa = async () => {
  const resp = await axios.get('https://hamburgueria-unyleya-api.herokuapp.com/depoimento');

  resp.data.forEach(it => {
    const { nome, depoimento, data_hora } = it;
    store.dispatch({
      type: 'PUSH_DEPOIMENTO',
      payload: {
        depoimento: {
          nome,
          depoimento,
          data_hora
        }
      }
    });
  })
};

inicializa();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
