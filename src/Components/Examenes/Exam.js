import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Quiz from "react-quiz-component";
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
    MDBListGroup, MDBCardHeader,
    MDBListGroupItem,
    MDBCheckbox,
    MDBInput,
    MDBContainer,
    MDBRadio,
} from "mdb-react-ui-kit";
import Pregunta from "./Pregunta";
import './Exam.css'
import { set } from "date-fns";
function Exam() {


    // const quiz = {
    //     quizTitle: "React Quiz Component Demo",
    //     quizSynopsis:
    //         "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
    //     questions: [
    //         {
    //             question:
    //                 "How can you access the state of a component from inside of a member function?",
    //             questionType: "text",
    //             questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
    //             answerSelectionType: "single",
    //             answers1: "asd",
    //             answers2: "asd",
    //             answers3: "asd",
    //             answers: [
    //                 "this.getState()",
    //                 "this.prototype.stateValue",
    //                 "this.state",
    //                 "this.values",
    //             ],
    //             correctAnswer: "3",
    //             messageForCorrectAnswer: "Correct answer. Good job.",
    //             messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    //             explanation:
    //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //             point: "20",
    //         },
    //         {
    //             question: "ReactJS is developed by _____?",
    //             questionType: "text",
    //             answerSelectionType: "single",
    //             answers: ["Google Engineers", "Facebook Engineers"],
    //             correctAnswer: "2",
    //             messageForCorrectAnswer: "Correct answer. Good job.",
    //             messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    //             explanation:
    //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //             point: "20",
    //         },
    //         {
    //             question: "ReactJS is an MVC based framework?",
    //             questionType: "text",
    //             answerSelectionType: "single",
    //             answers: ["True", "False"],
    //             correctAnswer: "2",
    //             messageForCorrectAnswer: "Correct answer. Good job.",
    //             messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    //             explanation:
    //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //             point: "10",
    //         },
    //         {
    //             question: "Which of the following concepts is/are key to ReactJS?",
    //             questionType: "text",
    //             answerSelectionType: "single",
    //             answers: [
    //                 "Component-oriented design",
    //                 "Event delegation model",
    //                 "Both of the above",
    //             ],
    //             correctAnswer: "3",
    //             messageForCorrectAnswer: "Correct answer. Good job.",
    //             messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    //             explanation:
    //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //             point: "30",
    //         },
    //         {
    //             question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    //             questionType: "photo",
    //             answerSelectionType: "single",
    //             answers: [
    //                 "https://dummyimage.com/600x400/000/fff&text=A",
    //                 "https://dummyimage.com/600x400/000/fff&text=B",
    //                 "https://dummyimage.com/600x400/000/fff&text=C",
    //                 "https://dummyimage.com/600x400/000/fff&text=D",
    //             ],
    //             correctAnswer: "1",
    //             messageForCorrectAnswer: "Correct answer. Good job.",
    //             messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    //             explanation:
    //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //             point: "20",
    //         },
    //         {
    //             question: "What are the advantages of React JS?",
    //             questionType: "text",
    //             answerSelectionType: "multiple",
    //             answers: [
    //                 "React can be used on client and as well as server side too",
    //                 "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
    //                 "React components have lifecycle events that fall into State/Property Updates",
    //                 "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer",
    //             ],
    //             correctAnswer: [1, 2, 4],
    //             messageForCorrectAnswer: "Correct answer. Good job.",
    //             messageForIncorrectAnswer: "Incorrect answer. Please try again.",
    //             explanation:
    //                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //             point: "20",
    //         },
    //     ],
    // };
    const [arrayClaves, setarrayClaves] = useState([])
    const [questionsArray, setquestionsArray] = useState({

        question: "",
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


    const [examen, setexamen] = useState([]);





    const onchange = (data) => {
        setexamen(data)
        console.log("Form>", data);
    }


    const handleChange = (e) => {
        setexamen({
            ...examen,
            [e.target.name]: e.target.value.trim()
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(examen);
        // console.log(questionsArray)
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
                        <MDBInput label="Titulo" id="typeText" type="text" size='lg' onChange={handleChange} />

                        <MDBInput
                            label="Descripcion"
                            id="textAreaExample"
                            textarea
                            rows={4}
                            type="text"
                            size='lg'
                        />
                    </div>
                    <h1>Preguntas</h1>


                    <Pregunta data={questionsArray}
                        // arrayClaves={arrayClaves}

                        setInfo={setquestionsArray}
                    // setArr={setarrayClaves} 
                    />



                    <MDBBtn onClick={() => {
                        // console.log(arrayClaves)
                        //  examen.push(questionsArray)
                        questionsArray.answers.push(questionsArray.answers1, questionsArray.answers2, questionsArray.answers3, questionsArray.answers4)
                        setexamen(examen => [...examen, questionsArray])

                        // console.log(examen)
                    }}>
                        Agregar pregunta

                    </MDBBtn>

                    <MDBBtn onClick={handleSubmit}>
                        Generar examen
                    </MDBBtn>
                    {/* <Quiz quiz={quiz} /> */}



                </div>

                <div className="right">

                    {examen.map(pregunta => (
                        // console.log('aea',pregunta)
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
