import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Videos from './pages/Videos';
import Depoimentos from './pages/Depoimentos';

import './styles.css';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/cardapio' exact={true} component={Menu} />
        <Route path='/videos' exact={true} component={Videos} />
        <Route path='/depoimentos' exact={true} component={Depoimentos} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
