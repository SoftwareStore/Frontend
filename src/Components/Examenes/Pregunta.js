import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBInputGroup,
    MDBInputGroupText,
    MDBInputGroupElement,
    MDBListGroup,
    MDBListGroupItem,
    MDBCheckbox,
    MDBInput,
    MDBContainer,
    MDBRadio,
} from "mdb-react-ui-kit";
import './Pregunta.css'
function Pregunta(props) {
    // const handleChange = event => {
    //     props.onchange(event.target.value);
    // }
    function ingresarData(e) {
        props.setInfo({ ...props.data, [e.target.name]: e.target.value })
    }
    function ingresarPreguntas(e) {
        props.setArr([...props.arrayClaves, e.target.value])
    }


    return (
        // (e) => {
        //     questionsArray[0] = e.target.value;
        // }


        <div className="camposGroup">
            <h2 style={{margin:'20px 0 20px 0 '}}>Enunciado</h2>

            <MDBInput name="question" label="Pregunta" id="typeText" type="text" size='lg'
                onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
            />


            <h2 style={{margin:'20px 0 20px 0 '}}>Claves</h2>

            <div  className="claves">

                <MDBInput name='answers1' label="Respuesta 1" id="typeText" type="text" size='lg'

                    onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                />


                <MDBInput name='answers2' label="Respuesta 2" id="typeText" type="text" size='lg'

                    onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                />


                <MDBInput name='answers3' label="Respuesta 3" id="typeText" type="text" size='lg'

                    onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                />


                <MDBInput name='answers4' label="Respuesta 4" id="typeText" type="text" size='lg'

                    onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                />
            </div>



            <h2 style={{margin:'30px 0 30px 0 '}}>Respuesta</h2>
            <div className="checks">
                <MDBRadio name="correctAnswer" id="flexRadioDefault1" label="1" value="1"
                    onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                />

                <MDBRadio name="correctAnswer" id="flexRadioDefault1" label="2" value="2"
                    onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                />
                <MDBRadio name="correctAnswer" id="flexRadioDefault1" label="3" value="3"
                    onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                />
                <MDBRadio name="correctAnswer" id="flexRadioDefault2" label="4" value="4"
                    onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
                />
            </div>
            <h2 style={{margin:'20px 0 20px 0 '}}>Puntos</h2>

            <MDBInput label="Puntos pregunta" id="typeNumber" type="number" name="point"
                onChange={ingresarData} onClick={ingresarData} onBlur={ingresarData} onKeyUp={ingresarData}
            />

        </div>
    )
}

export default Pregunta
