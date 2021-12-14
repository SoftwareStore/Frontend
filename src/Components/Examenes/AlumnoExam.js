import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from "react-quiz-component";



function AlumnoExam() {

    const {  codigo } = useParams()
    const [data, setdata] = useState()
    const [user, setuser] = useState()
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/api/exam/getExam/' + codigo).then((res) => {
          
            setdata(res.data.exam[0])
            axios.get("http://localhost:5000/api/user/login", { withCredentials: true }).then(response => {
                setuser(response.data[0]);
    
            });
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
        <div className="d-flex justify-content-center">
            <Quiz quiz={data} onComplete={(grade) => {
                if (grade.totalPoints !== 0) {
                    grade.course = codigo

                    grade.user = user._id
                   
            
                    axios.post("http://localhost:5000/api/respon/newResponExam", grade
                    ).then((response) => {  })


                }

            }

            } />
        </div>
    )
}

export default AlumnoExam
