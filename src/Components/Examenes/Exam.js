import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useHistory } from "react-router-dom";
import Quiz from "react-quiz-component";
import {
    MDBCard,
    MDBBtn,
    MDBListGroup, MDBCardHeader,
    MDBListGroupItem,
    MDBInput,
} from "mdb-react-ui-kit";
import Swal from 'sweetalert2'
import Pregunta from "./Pregunta";
import './Exam.css'

function Exam() {

    const history = useHistory()

    const [questionsArray, setquestionsArray] = useState({

        question: "",
        questionType: "text",
        answerSelectionType: "single",
        answers: [],
        correctAnswer: "",
        messageForCorrectAnswer: "Correct answer. Good job.",
        messageForIncorrectAnswer: "Incorrect answer. Please try again.",
        explanation: "",
        point: ""

    });



    //informacion del curso
    const [data, setData] = useState();
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [preguntasFinal, setpreguntasFinal] = useState([]);
    const [examen, setexamen] = useState({
        quizTitle: '',
        quizSynopsis: '',
        questions: []
    });




    const handleTitle = (e) => {
        setexamen({ ...examen, [e.target.name]: e.target.value })
    }




    const handleSubmit = (e) => {
        e.preventDefault()
        examen.questions = preguntasFinal;
        // console.log(examen)
        Swal.fire({
            title: '¿Estas seguro?',
            text: "No podras revertir esta accion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si , envialo!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post("https://classroombackend.herokuapp.com/api/exam/newExam/" + id, examen).then(response => { console.log(response) })
                Swal.fire(
                    'Enviado!',
                    'El examen fue enviado.',
                    'success'
                )
               history.push("/VerCurso/"+id)
              
            }
        })
      
        // ... submit to API or something
    };

    useEffect(() => {
        //consulta a la api con el id del link
        axios
            .get("https://classroombackend.herokuapp.com/api/course/" + id)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            });
    }, []);
    if (isLoading) {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: "30px" }}>
            <div className="d-flex flex-column rounded-3 align-items-left mb-3 bg-primary p-5">
                <div className="p-2">
                    <h1>{data.course[0].Name}</h1>
                </div>
                <div className="p-2">
                    <h3>{data.course[0].Code}</h3>
                </div>
            </div>


            <div className="mainContainer">
                <div className="left">


                    <div className="descrip">
                        <MDBInput label="Titulo" id="typeText" type="text" size='lg' name='quizTitle'
                            onChange={handleTitle} onClick={handleTitle} onBlur={handleTitle} onKeyUp={handleTitle} />

                        <MDBInput
                            label="Descripcion"
                            id="textAreaExample"
                            name="quizSynopsis"
                            textarea
                            rows={4}
                            type="text"
                            size='lg'
                            onChange={handleTitle} onClick={handleTitle} onBlur={handleTitle} onKeyUp={handleTitle}
                        />
                    </div>
                    <h1>Preguntas</h1>


                    <Pregunta data={questionsArray}
                        setInfo={setquestionsArray}

                    />



                    <MDBBtn onClick={() => {
                        questionsArray.answers[0] = questionsArray.answers1;
                        questionsArray.answers[1] = questionsArray.answers2;
                        questionsArray.answers[2] = questionsArray.answers3;
                        questionsArray.answers[3] = questionsArray.answers4;
                        setpreguntasFinal(preguntasFinal => [...preguntasFinal, questionsArray])

                    }}>
                        Agregar pregunta
                    </MDBBtn>

                    <MDBBtn onClick={handleSubmit}>
                        Generar examen
                    </MDBBtn>




                </div>

                <div className="right">

                    {preguntasFinal.map(pregunta => (

                        <MDBCard style={{ width: '16rem' }}>
                            <MDBCardHeader>{pregunta.question}</MDBCardHeader>
                            <MDBListGroup flush>
                                <MDBListGroupItem>{pregunta.answers[0]}</MDBListGroupItem>
                                <MDBListGroupItem>{pregunta.answers[1]}</MDBListGroupItem>
                                <MDBListGroupItem>{pregunta.answers[2]}</MDBListGroupItem>
                                <MDBListGroupItem>{pregunta.answers[3]}</MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCard>
                    ))}




                </div>

            </div>



        </div>
    );
}

export default Exam;
