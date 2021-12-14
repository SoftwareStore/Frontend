
import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
    @media only screen and (max-width : 399px) {
        width: 10%
    }
`

const BtnFacebook = styled.button`
    width: 320px;
    height:45px;  
    border-radius: 4px;
    background: #3b5998;
    color:white;
    border:0px transparent;  
    text-align: center;
    margin:5px;
    display: inline-block;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`;
const BtnGoogle = styled.button`
    width: 320px;
    height:45px;
    border-radius: 4px;
    background: #db3236;
    color:white;
    border:0px transparent;
    text-align: center;
    margin:5px;
    display: inline-block;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`

    
function Botones() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                <Wrapper>
                    <BtnFacebook >
                        <a href="https://classroombackend.herokuapp.com/auth/facebook">&nbsp;&nbsp;Facebook</a>
                        </BtnFacebook >
                    <BtnGoogle >
                        <a href="https://classroombackend.herokuapp.com/auth/google">&nbsp;&nbsp;Google</a>
                        </BtnGoogle >
                   
                </Wrapper>
            </div>
        )
}

export default Botones;
