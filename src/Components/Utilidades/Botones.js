import axios from 'axios';
import React, { Component } from 'react'
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
const BtnTwitter = styled.button`
    width: 320px;
    height:45px;  
    border-radius: 4px;
    background: #55acee;
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
const BtnInstagram = styled.button`
    width: 320px;
    height:45px;  
    border-radius: 4px;
    background: #ac2bac;
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
const BtnLinkedin = styled.button`
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
        background: #3b5998;
        opacity: 0.6;
    }
`;
class Botones extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                <Wrapper>
                    <BtnFacebook >
                        <a href="http://localhost:5000/auth/facebook">&nbsp;&nbsp;Facebook</a>
                        </BtnFacebook >
                    <BtnGoogle >
                        <a href="http://localhost:5000/auth/google">&nbsp;&nbsp;Google</a>
                        </BtnGoogle >
                    {/* <BtnTwitter>
                        &nbsp;&nbsp;Twitter
                    </BtnTwitter>
                    <BtnInstagram>
                        &nbsp;&nbsp;Instagram
                    </BtnInstagram>
                    <BtnLinkedin>
                        &nbsp;&nbsp;Linkedin
                    </BtnLinkedin> */}
                </Wrapper>
            </div>
        )
    }
}

export default Botones;
