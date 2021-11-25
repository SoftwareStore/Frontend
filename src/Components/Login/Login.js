import React, { useState } from "react";
import Botones from '../Utilidades/Botones';
import Dividisor from '../Utilidades/Dividisor';
import './Login.css';
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
    let history = useHistory();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const loginw = () =>{
        console.log(loginEmail)
        console.log(loginPassword)
        Axios({
            method: "post",
            url: "http://localhost:5000/api/user/login", // <-- ruta Login del servidor
            data: {
                email: loginEmail,
                password: loginPassword,
            },
            withCredentials: true,
             
        }).then((res) => console.log(res)
        );
    };
    function handleClick() {
        //history.push("/");
    }

    return (
        <div className="Login">
            <form >
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" className="form-control" placeholder="Email" onChange={(e) => setLoginEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordar</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={loginw, handleClick} >Iniciar Sesion</button>
                <br />
                <p className="forgot-password text-center">
                    <a href="/Registro">¿No Esta registrado?</a>
                </p>

                <Dividisor>O</Dividisor>
                <Botones />
            </form>
        </div>
    )
}



export default Login;