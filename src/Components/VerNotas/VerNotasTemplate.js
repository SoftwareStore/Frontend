import axios from 'axios';
import React from 'react'
import { useParams } from "react-router-dom";
function VerNotas() {
    const { id,userCode } = useParams()
    console.log(id)
    axios.get('http://localhost:5000/api/respon/getById/' + id+'/'+userCode).then(
        res => {
            console.log(res.data)
        })

    return (
        <div>
            <h1>notas</h1>
            <p>{id}</p>
        </div>
    )
}

export default VerNotas
