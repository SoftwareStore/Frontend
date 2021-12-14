import React from 'react'

import Footer from '../../Components/Footer/Footer1'
import ListarCursosTemplate from '../../Components/ListarCursos/Main';
import Header from '../../Components/Header/HeaderSesion'

function ListarCursos(props) {
    return (
        <div className="">
          
            <Header/>
            <ListarCursosTemplate />
            {/* <Footer /> */}
        </div>

    )
}

export default ListarCursos
