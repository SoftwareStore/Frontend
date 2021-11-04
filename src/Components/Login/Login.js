import React, { useState } from "react";
import Botones from '../Utilidades/Botones';
import Dividisor from '../Utilidades/Dividisor';
import './Login.css';
import Axios from "axios";

function Login() {
        const [loginEmail, setLoginEmail] = useState("");
        const [loginPassword, setLoginPassword] = useState("");
        const login = () => {
            Axios({
                method: "POST",
                data: {
                    email: loginEmail,
                    password: loginPassword,
                },
                withCredentials: true,
                url: "http://localhost:5000/login", // <-- ruta Login del servidor 
            }).then((res) => console.log(res));
        };

        return (
            <div className="Login">
                <form >
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setLoginEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Recordar</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={login} href="/">Iniciar Sesion</button>
                    <br />
                    <p className="forgot-password text-center">
                        <a href="#">¿Olvidó su password?</a>
                    </p>

                    <Dividisor>O</Dividisor>
                    <Botones />
                </form>
            </div>
        )
    }



export default Login;