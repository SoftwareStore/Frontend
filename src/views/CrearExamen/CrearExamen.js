import React from 'react'
import HeaderSesion from '../../Components/Header/HeaderSesion'
import Footer from '../../Components/Footer/Footer1'
import CrearExamenTemplate from '../../Components/Examenes/Exam'
import { useParams } from 'react-router-dom';



function CrearExamen() {
    const { id } = useParams();




    return (
        <div>
            <HeaderSesion/>
            <CrearExamenTemplate/>
            <Footer/>
        </div>
    )
}

export default CrearExamen
