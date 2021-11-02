import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBListGroup, MDBListGroupItem, MDBCardLink } from 'mdb-react-ui-kit';
import React from 'react'

function VerCurso(props) {
    return (
        <div className="">
            <div className="d-flex flex-column rounded-3 align-items-left mb-3 bg-primary p-5">

                <div className="p-2">
                    <h1>Desarrollo de Software</h1>
                </div>
                <div className="p-2">
                    <h3>ABC123</h3>
                </div>

            </div>
           
            <MDBRow className='justify-content-center'>
                <MDBCol sm='3'>
                    <MDBCard className='mb-4'>
                        <MDBCardBody>
                            <MDBCardTitle>HOMEWORK</MDBCardTitle>

                            <MDBListGroup flush>
                                <MDBListGroupItem> <p>Cras justo odio</p>
                                    <MDBCardLink href='#'>Card link</MDBCardLink>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                    <MDBCardLink href='#'>Card link</MDBCardLink></MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                    <MDBCardLink href='#'>Card link</MDBCardLink></MDBListGroupItem>
                            </MDBListGroup>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard className='mb-4'>
                        <MDBCardBody>
                            <MDBCardTitle>ANNOUNCEMENTS</MDBCardTitle>
                            <MDBListGroup flush>
                                <MDBListGroupItem> <p>Cras justo odio</p>
                                    <MDBCardLink href='#'>Card link</MDBCardLink>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                    <MDBCardLink href='#'>Card link</MDBCardLink></MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                    <MDBCardLink href='#'>Card link</MDBCardLink></MDBListGroupItem>
                            </MDBListGroup>


                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm='3'>
                    <MDBCard className='mb-4'>
                        <MDBCardBody>
                            <MDBCardTitle>LIST</MDBCardTitle>
                            <MDBListGroup flush>
                                <MDBListGroupItem> <p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem> <p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem> <p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem> <p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                </MDBListGroupItem>
                                <MDBListGroupItem><p>Cras justo odio</p>
                                </MDBListGroupItem>
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










