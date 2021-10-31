import React from 'react';
import './Login.css'

class Login extends React.Component {
    //Loginform({Login,error}) {
    //   const [details,setDetails] = useState({Email:"",Password:""});
    //    const submitHantler = e =>{
    //        e.preventDefault();
    //        Login(details);
    //    }        
    //}
    render() {
        return (
        <div className="Login">
            <form >
            <h3>Login</h3>

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
            </div>
        )
    }

}

export default Login;