import React from 'react';
import Onl from '../../Assets/Img/online.jpg';
import './Home.css'
class Home extends React.Component {
    render() {
        return (<div >
            <img src={Onl} height="360" alt="claseOnline" />
            <div className="container">
                <a href="Login"><input type="button" style={styles.box} value="Iniciar Sesion" /></a>
                <a href="Registro"><input type="button" style={styles.box} value="Registro" /></a>
            </div>
        </div>)
    }

}
const styles = {
    box: {
        margin: '10px'

    }

}
export default Home;