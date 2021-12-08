//import React, { useState } from 'react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Home from './Home';
import Home3 from './Home3';
export default function App() {

  const [data, setData] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/login",{withCredentials: true})
    .then(response => {setData(false)})
  }, []);

  if(data){
    return(
      <Home></Home>
    )
  }
  else {
    return (
      <Home3></Home3>
    )
  }
}