import React, { useState } from 'react';
import Botones from '../Utilidades/Botones';
import './Registro.css';
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Registro() {
    let history = useHistory();
        const [registroFirstName, setRegistroFirstName] = useState("");
        const [registroLastName, setRegistroLastName] = useState("");
        const [registroAge, setRegistroAge] = useState("");
        const [registroEmail, setRegistroEmail] = useState("");
        const [registroPassword, setRegistroPassword] = useState("");

        const registroEnv = async e => {
            e.preventDefault();
            await Axios({
                method: "POST",
                url: "http://localhost:5000/api/user/register", // <-- ruta Registro del servidor 
                data: {
                    firstName: registroFirstName,
                    lastName: registroLastName,
                    age: registroAge,
                    email: registroEmail,
                    password: registroPassword,
                    role: "Alumno",
                },
                withCredentials: true,
                
            }).then((res) => {
                //console.log(res)
                if(res.status===200)
                    history.push("/");
            }
            );
        };
        
        return (
            <div className="Registro">
                <form>
                    <h3>Registrarse</h3>

                    <div className="form-group">
                        {/* <label>Nombre</label> */}
                        <input type="text" className="form-control" placeholder="Nombre" onChange={(e) => setRegistroFirstName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        {/* <label>Apellido</label> */}
                        <input type="text" className="form-control" placeholder="Apellido" onChange={(e) => setRegistroLastName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        {/* <label>Edad</label> */}
                        <input type="text" className="form-control" placeholder="Edad" onChange={(e) => setRegistroAge(e.target.value)} />
                    </div>

                    <div className="form-group">
                        {/* <label>Email</label> */}
                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setRegistroEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        {/* <label>Password</label> */}
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setRegistroPassword(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={registroEnv} >Registrar</button>
                    <br />
                    <p className="forgot-password text-center">
                        ¿Registrado? <a href="/Login">¿iniciar sesión?</a>
                    </p>

                    
                    <Botones />
                </form>
            </div>
        )
    }



export default Registro;