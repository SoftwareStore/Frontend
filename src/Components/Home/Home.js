import React from 'react';
import Onl from '../../Assets/Img/online.jpg';

class Home extends React.Component {
    
    render() {
        return (<div>
            <img src={Onl} height="240"/>
            <div> <a href="/Login">Iniciar Sesion</a>   <a href="/Registro">Registro</a></div>
        </div>)
    }

}

export default Home;