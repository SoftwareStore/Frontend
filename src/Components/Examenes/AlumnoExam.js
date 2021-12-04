import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from "react-quiz-component";
import { setDate } from 'date-fns';


function AlumnoExam() {

    const { id, codigo } = useParams()
    const [data, setdata] = useState()
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://classroombackend.herokuapp.com/api/exam/getExam/' + codigo).then((res) => {
            console.log(res.data.exam[0])
            setdata(res.data.exam[0])
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



    return (
        <div>
           

            <Quiz quiz={data} onComplete={(e)=>{console.log(e)}}/>

        </div>
    )
}

export default AlumnoExam
