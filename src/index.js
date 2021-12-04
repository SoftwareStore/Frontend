import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

// Importar Componentes
import Home from './views/Home/Home'
import Login from './views/Login/Login';
import Registro from './views/Register/Register';
import ListCurso from './views/ListarCursos/ListarCursos';
import VerCurso from './views/VerCurso/VerCurso';
import CrearExamen from './views/CrearExamen/CrearExamen';
import TomarExamen from './views/TomarExamen/TomarExamen';
// Stylos
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Registro" component={Registro} />
      <Route exact path="/ListCurso" component={ListCurso} />
      <Route exact path="/VerCurso/:id" component={VerCurso} />
      <Route exact path="/CrearExamen/:id" component={CrearExamen}/>
      <Route exact path="/TomarExamen/:id/:codigo" component={TomarExamen}/>


    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
