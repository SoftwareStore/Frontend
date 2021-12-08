//import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderAlumno from './HeaderAlumno2';
import HeaderProfesor from './HeaderProfesor2';
import Header from './Header';
export default function App() {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/login",{withCredentials: true}).then(response => {
      setData(response.data[0].role);
    }).catch(err=>console.log(err));
  }, []);
console.log(data)
  if(data === "Alumno"){
    return(
      <HeaderAlumno></HeaderAlumno>
    )
  }
  else if(data === "Profesor"){
    return(
      <HeaderProfesor></HeaderProfesor>
    )
  }
  else {
    return(
      <Header></Header>
    )
  }
}