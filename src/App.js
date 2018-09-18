import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Inicio from './Home/Inicio';
import Categorias from './Jogo/Categorias';
import Perguntas from './Jogo/Perguntas';
import Resultado from './Jogo/Resultado';
import Ranking from './Jogo/Ranking';
import HeaderCustom from './Jogo/HeaderCustom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact component={Inicio} />
          <Route path='/categorias' component={Categorias} />
          {/*Os parâmetros passados pelas rotas chegam no componente através da propriedade params*/}
          <Route path='/perguntas/:nome' component={Perguntas} />
          <Route path='/resultado' component={Resultado} />
          <Route path='/ranking' component={Ranking} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
