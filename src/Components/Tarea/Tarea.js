import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { MDBTypography } from 'mdb-react-ui-kit';
import { da } from 'date-fns/locale';
import moment from 'moment';
moment().format();
function Tarea() {
    const { id, codigo } = useParams()
    const [data, setdata] = useState()
    const [isLoading, setLoading] = useState(true);

    //File
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
    };

    const [fromDate, setfromDate] = useState()
    const [toDate, settoDate] = useState()

    const dateNow = moment().format("DD-MM-YYYY hh:mm:ss")
    ////////////////


    useEffect(() => {

        axios.get('http://localhost:5000/api/homework/main/' + codigo).then(response => {
            // console.log(response.data.homework[0])
            setdata(response.data.homework[0])
            setfromDate(moment(response.data.homework[0].From).format('DD MMM, YYYY hh:mm'))
            settoDate(moment(response.data.homework[0].To).format('DD MMM, YYYY hh:mm'))
            setLoading(false);

        })
    }, [])
    if (isLoading) {
        return <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }

    // console.log(fromDate)
    // const dia = fromDate.getTime()
    if (toDate >= dateNow) {
        return (<div>



            <div className="d-flex flex-column rounded-3 align-items-left mb-3 bg-primary p-5">

                <div className="p-2">
                    <h1>{data.Title}</h1>
                </div>
                <div className="p-2">
                    <h3>{fromDate} - {toDate}</h3>

                </div>

            </div>
            <div className="d-flex flex-column mb-3 justify-content-center align-items-center p-5 gy-5">
                <MDBTypography note noteColor='primary' className="w-50 p-3">
                    <strong>Descripcion: </strong>
                    <hr />
                    {data.Description}
                </MDBTypography>


                <input type="file" name="file" onChange={changeHandler} />
                {isFilePicked ? (
                    <div className="d-flex flex-column rounded-3 align-items-left mb-3 p-5">
                        <p>Nombre: {selectedFile.name}</p>
                        <p>Tipo de archivo: {selectedFile.type}</p>
                        <p>Tamaño: {selectedFile.size}</p>
                        <p>
                            lastModifiedDate:{' '}
                            {selectedFile.lastModifiedDate.toLocaleDateString()}
                        </p>
                    </div>
                ) : (
                    <p>Seleccion un archivo para mostrar detalles</p>
                )}
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>

            </div>




        </div>)


    }
    return (
        <div>



            <div className="d-flex flex-column rounded-3 align-items-left mb-3 bg-primary p-5">

                <div className="p-2">
                    <h1>{data.Title}</h1>
                </div>
                <div className="p-2">
                    <h3>{fromDate} - {toDate}</h3>

                </div>

            </div>
            <div className="d-flex flex-column mb-3 justify-content-center align-items-center p-5 gy-5">
                <MDBTypography note noteColor='primary' className="w-50 p-3">
                    <strong>Descripcion: </strong>
                    <hr />
                    {data.Description}
                </MDBTypography>


                <MDBTypography note noteColor='warning'>
                    
             
                    <strong>Ya no se aceptan más envios</strong> 
                </MDBTypography>

            </div>




        </div>
    )
}

export default Tarea
