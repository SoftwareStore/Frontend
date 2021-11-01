import React from 'react';
import Botones from '../Utilidades/Botones';
import Dividisor from '../Utilidades/Dividisor';
import './Registro.css';

class Registro extends React.Component {
    render() {
        return (
            <div className="Registro">
                <form>
                    <h3>Registrarse</h3>

                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre" />
                    </div>

                    <div className="form-group">
                        <label>Apellido</label>
                        <input type="text" className="form-control" placeholder="Apellido" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                    <br/>
                    <p className="forgot-password text-center">
                        ¿Registrado? <a href="/Login">¿iniciar sesión?</a>
                    </p>

                    <Dividisor>O</Dividisor>
                    <Botones/>
                </form>
            </div>
        )
    }

}

export default Registro;