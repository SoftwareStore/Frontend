import React from 'react';
import styled from 'styled-components';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


class Footer extends React.Component {
    render() {
        return (
            <>
                <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
                    <MDBContainer className='p-4 pb-0'>
                        <MDBRow>
                            <MDBCol className='mb-4 mb-md-0'>
                                {/* Facebook  */}
                                <MDBBtn color='#3b5998' href='https://facebook.com/ClassRoomA+' target="_blank">
                                    <MDBIcon fab icon='facebook-f' color='black' size='lg'/>
                                </MDBBtn>
                            </MDBCol>

                            <MDBCol floating className='mb-4 mb-md-0'>
                                {/* <!-- Github --> */}
                                <MDBBtn color='#333333' href='https://github.com/SoftwareStore/Classroom-backend' target="_blank">
                                    <MDBIcon fab icon='github' color='black' size='lg'/>
                                </MDBBtn>
                            </MDBCol>

                            <MDBCol size='lg' floating className='mb-4 mb-md-0'>
                                {/* <!-- Github --> */}
                                <MDBBtn color='white' href='https://github.com/SoftwareStore/Frontend' target="_blank">
                                    <MDBIcon fab icon='github' color='black' size='lg'/>
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <a className='text-white' href='#'>
                            ClassRoom A+
                        </a>
                    </div>
                </MDBFooter>
            </>
        );
    }



}

export default Footer;