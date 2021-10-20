import React from 'react';

class Login extends React.Component {
    render() {
        return (<form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email: </label>
                <input type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="form-group">
                <label>Password: </label>
                <input type="password" className="form-control" placeholder="Password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Recordar</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Iniciar Sesion</button>
            <p className="forgot-password text-right">
                ¿Olvidó su <a href="#">password?</a>
            </p>
        </form>
        )
    }

}

export default Login;