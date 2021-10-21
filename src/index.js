import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

// Importar Componentes
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Registro from './Components/Registro/Registro';
import ListCurso from './Components/Cursos/ListCurso';
import verCurso from './Components/Cursos/VerCurso';
import GenerarCurso from './Components/Cursos/GenerarCurso';
import RegistrarAsistencia from './Components/RegistrarAsistencia/RegistrarAsistencia'
import EnvTarea from './Components/Tareas/EnvTarea'
import GenTarea from './Components/Tareas/GenTarea'
import ListTarea from './Components/Tareas/ListTarea'
// Stylos
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Registro" component={Registro} />
      <Route exact path="/ListCurso" component={ListCurso} />
      <Route exact path="/verCurso" component={verCurso} />
      <Route exact path="/GenerarCurso" component={GenerarCurso} />
      <Route exact path="/RegistrarAsistencia" component={RegistrarAsistencia} />
      <Route exact path="/EnvTarea" component={EnvTarea} />
      <Route exact path="/GenTarea" component={GenTarea} />
      <Route exact path="/ListTarea" component={ListTarea} />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
