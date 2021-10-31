import React from 'react';
import './Registro.css'

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
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                    <p className="forgot-password text-right">
                        ¿Registrado? <a href="/Login">¿iniciar sesión?</a>
                    </p>
                </form>
            </div>
        )
    }

}

export default Registro;