import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow,
    MDBCol, MDBBtn, MDBListGroup, MDBListGroupItem, MDBCardLink,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function VerCurso(props) {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    const { id } = useParams();
    console.log(id)

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    useEffect(() => {
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
    // console.log()
    const listHomework = data.course[0].homeworks.map((item) =>
        <MDBListGroupItem> <p>{item.Title}</p>
            {/* <MDBCardLink href='#'>Card link</MDBCardLink> */}
            <MDBBtn onClick={toggleShow}>Ver tarea</MDBBtn>
            <MDBModal show={basicModal} getOpenState={(e: any) => setBasicModal(e)} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{item.Title}</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>...</MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                            <MDBBtn>Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </MDBListGroupItem>
    )

    const listAnno = data.course[0].announcements.map((anno) =>
        <MDBListGroupItem> <p>{anno.Title}</p>
            <MDBCardLink href='#'>Leer</MDBCardLink>
        </MDBListGroupItem>
    )

    const listUsers = data.course[0].participants.map((users) =>
        <MDBListGroupItem> <p>{users.firstName} {users.lastName}</p>
        </MDBListGroupItem>

    )

    console.log(data)

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

            <MDBRow className='justify-content-center'>
                <MDBCol sm='3'>
                    <MDBCard className='mb-4'>
                        <MDBCardBody>
                            <MDBCardTitle>HOMEWORK</MDBCardTitle>

                            <MDBListGroup flush>
                                {listHomework}
                            </MDBListGroup>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard className='mb-4'>
                        <MDBCardBody>
                            <MDBCardTitle>ANNOUNCEMENTS</MDBCardTitle>
                            <MDBListGroup flush>
                                {listAnno}
                            </MDBListGroup>


                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard className='mb-4'>
                        <MDBCardBody>
                            <MDBCardTitle>LIST</MDBCardTitle>
                            <MDBListGroup flush>

                                {listUsers}
                            </MDBListGroup>


                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

        </div>
    )
}

export default VerCurso







{/* <div className="d-sm-flex flex-row justify-content-center align-items-center p-5 gap-5">
                <div className="d-flex flex-column w-25 p-4 bg-success align-items-center justify-content-center ">
                    <h5>HOMEWORK</h5>

                </div>
                <div className="d-flex flex-column w-25 p-4 bg-success align-items-center justify-content-center ">
                    <h5>ANNOUNCEMENTS</h5>
                </div>
                <div className="d-flex flex-column w-25 p-4 bg-success align-items-center justify-content-center">
                    <h5>LIST</h5>
                </div>
            </div> */}










