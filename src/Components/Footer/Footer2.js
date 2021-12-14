import React from 'react';
import styled from 'styled-components';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const BtnGithub = styled.button`
    width: 320px;
    height:45px;  
    border-radius: 4px;
    background: #0082ca;
    color:white;
    border:0px transparent;  
    text-align: center;
    margin:5px;
    display: inline-block;

    &:hover{
        background: #333333;
        opacity: 0.6;
    }
`;

class Footer extends React.Component {
    render() {
        return (
            <>
            <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
                <MDBContainer className='p-4 pb-0'>
                    <MDBRow>
                        {/* <MDBCol size='auto' className='mb-4 mb-md-0'>
                            <!-- Facebook --> 
                            <MDBBtn style={{ backgroundColor: '#3b5998' }} href='#'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>
                        </MDBCol> 
                        */}
                        <button type="button" class="btn btn-primary btn-lg btn-floating">
  <i class="fab fa-facebook-f"></i>
</button>
<BtnGithub></BtnGithub>
                        <MDBCol size='lg' floating className='mb-4 mb-md-0'>
                            {/* <!-- Github --> */}
                            <MDBBtn style={{ backgroundColor: '#333333' }} href='Backend'>
                                <MDBIcon fab icon='github' />
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol size='lg' floating  className='mb-4 mb-md-0'>
                            {/* <!-- Github --> */}
                            <MDBBtn style={{ backgroundColor: '#333333' }} href='FrontEnd'>
                                <MDBIcon fab icon='github' />
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