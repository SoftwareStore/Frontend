import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow,
    MDBCol, MDBBtn, MDBListGroup, MDBListGroupItem, MDBCardLink,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter, MDBIcon
} from 'mdb-react-ui-kit';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



function VerCurso(props) {
    const [homeworkModal, setHomeworkModal] = useState(false);
    const [announcementsModal, setAnnouncementModal] = useState(false);
    //Usa el id del link 
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();

    const [homeworkData, setHomework] = useState('');
    const [announcementData, setAnnouncement] = useState('');
    useEffect(() => {
        //consulta a la api con el id del link
        axios.get("https://classroombackend.herokuapp.com/api/course/" + id).then(response => {
            setData(response.data);
            setLoading(false);
        });
    }, []);
    if (isLoading) {
        return <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }
    ///////Homework modal

    const toggleShowHomework = (homeworkData) => {
        setHomework(homeworkData);
        setHomeworkModal(!homeworkModal)
    };

    ////////Announcements modal
    const toggleShowAnnouncements = (announcementData) => {
        setAnnouncement(announcementData);
        setAnnouncementModal(!announcementsModal)
    };



    const listHomework = data.course[0].homeworks.map((item) =>
        <MDBListGroupItem> <p>{item.Title}</p>
            {/* <MDBCardLink href='#'>Card link</MDBCardLink> */}
            <MDBBtn onClick={() => toggleShowHomework(item)} >Ver tarea</MDBBtn>

        </MDBListGroupItem>
    )

    const listAnno = data.course[0].announcements.map((anno) =>
        <MDBListGroupItem> <p>{anno.Title}</p>
            <MDBBtn onClick={() => toggleShowAnnouncements(anno)} >Ver tarea</MDBBtn>

        </MDBListGroupItem>
    )

    const listUsers = data.course[0].exams.map((users) =>
        <MDBListGroupItem> <p>{users.firstName} {users.lastName}</p>
        </MDBListGroupItem>

    )


    return (
        <div className="">
            <div className="d-flex flex-column rounded-3 align-items-left mb-3 bg-primary p-5">

                <div className="p-2">
                    <h1>{data.course[0].Name}</h1>
                </div>
                <div className="p-2">
                    <h3>{data.course[0].Code}</h3>
                </div>

            </div>

            <MDBRow className='justify-content-center m-0'>
                <MDBCol sm='3'>
                    <MDBCard className='mb-4'>
                        <MDBCardBody>
                            <MDBCardTitle>
                                TAREAS

                            </MDBCardTitle>

                            <MDBListGroup flush>
                                {listHomework}
                            </MDBListGroup>

                        </MDBCardBody>
                    </MDBCard>
                    {/* modal */}
                    <MDBModal show={homeworkModal} getOpenState={(e) => setHomeworkModal(e)} tabIndex='-1'>
                        <MDBModalDialog>
                            <MDBModalContent>
                                <MDBModalHeader>
                                    <MDBModalTitle>{homeworkData.Title}</MDBModalTitle>
                                    <MDBBtn className='btn-close' color='none' onClick={toggleShowHomework}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>{homeworkData.Description} <hr /> {homeworkData.From} <hr />{homeworkData.To}</MDBModalBody>


                                <MDBModalFooter>
                                    <MDBBtn color='secondary' onClick={toggleShowHomework}>
                                        Cerrar
                                    </MDBBtn>
                                    {/* <MDBBtn>Save changes</MDBBtn> */}
                                </MDBModalFooter>
                            </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal>
                    {/* modal */}

                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard className='mb-4'>

                        <MDBCardBody>
                            <MDBCardTitle>ANUNCIOS
                            </MDBCardTitle>
                            <MDBListGroup flush>
                                {listAnno}
                            </MDBListGroup>


                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard className='mb-4'>
                        <MDBCardBody>

                            <MDBCardTitle>
                                EXAMENES
                            </MDBCardTitle>
                            {/* <MDBIcon fas icon="user-plus" size='ms' /> */}

                            <MDBListGroup flush>

                                {listUsers}
                            </MDBListGroup>


                        </MDBCardBody>
                    </MDBCard>
                    {/* modal */}
                    <MDBModal show={announcementsModal} getOpenState={(e) => setAnnouncementModal(e)} tabIndex='-1'>
                        <MDBModalDialog>
                            <MDBModalContent>
                                <MDBModalHeader>
                                    <MDBModalTitle>{announcementData.Title}</MDBModalTitle>
                                    <MDBBtn className='btn-close' color='none' onClick={toggleShowAnnouncements}></MDBBtn>
                                </MDBModalHeader>
                                <MDBModalBody>{announcementData.Description}</MDBModalBody>

                                <MDBModalFooter>
                                    <MDBBtn color='secondary' onClick={toggleShowAnnouncements}>
                                        Cerrar
                                    </MDBBtn>
                                    {/* <MDBBtn>Save changes</MDBBtn> */}
                                </MDBModalFooter>
                            </MDBModalContent>
                        </MDBModalDialog>
                    </MDBModal>
                    {/* modal */}
                </MDBCol>
            </MDBRow>

        </div>
    )
}

export default VerCurso












