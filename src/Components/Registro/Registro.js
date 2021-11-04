import React, { useState } from 'react';
import Botones from '../Utilidades/Botones';
import Dividisor from '../Utilidades/Dividisor';
import './Registro.css';
import Axios from "axios";

function Registro() {
        const [registroFirstName, setRegistroFirstName] = useState("");
        const [registroLastName, setRegistroLastName] = useState("");
        const [registroAge, setRegistroAge] = useState("");
        const [registroEmail, setRegistroEmail] = useState("");
        const [registroPassword, setRegistroPassword] = useState("");

        const registro = () => {
            Axios({
                method: "POST",
                data: {
                    firstName: registroFirstName,
                    lastName: registroLastName,
                    age: registroAge,
                    email: registroEmail,
                    password: registroPassword,
                    role: "Alumno",
                },
                withCredentials: true,
                url: "http://localhost:5000/register", // <-- ruta Registro del servidor 
            }).then((res) => console.log(res));
        };
        return (
            <div className="Registro">
                <form>
                    <h3>Registrarse</h3>

                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre" onChange={(e) => setRegistroFirstName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Apellido</label>
                        <input type="text" className="form-control" placeholder="Apellido" onChange={(e) => setRegistroLastName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Edad</label>
                        <input type="text" className="form-control" placeholder="Edad" onChange={(e) => setRegistroAge(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setRegistroEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="password" onChange={(e) => setRegistroPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={registro} href="/">Registrar</button>
                    <br />
                    <p className="forgot-password text-center">
                        ¿Registrado? <a href="/Login">¿iniciar sesión?</a>
                    </p>

                    <Dividisor>O</Dividisor>
                    <Botones />
                </form>
            </div>
        )
    }



export default Registro;