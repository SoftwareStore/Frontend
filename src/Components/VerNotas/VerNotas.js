import React from 'react'
import { useParams } from "react-router-dom";
function VerNotas() {
    const { id} = useParams()
    console.log(id)
    return (
        <div>
            <h1>notas</h1>
            asdasdasd
        </div>
    )
}

export default VerNotas
