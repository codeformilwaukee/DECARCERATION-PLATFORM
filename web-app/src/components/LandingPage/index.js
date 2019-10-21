import React from 'react';
import '../LandingPage/LandingPage.css'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const LoginButton = styled(Button)({

    top:'60%',
    left:'50%',
    width: '15vw',

    background: 'rgb(61,192,79)',
    border: 0,
    borderRadius: 0,
    outline: 0,
    color: 'white',
    padding: '3px 8px',
    fontSize: '1.5vw',
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: '3px',
    textDecoration: 'none'
  });


const LandingPage = () => (
    
    
    <div>
        <div className = "welcomeWrapper">
            
        <img src={"images/d.png"}
            stretched = "false"
            style={{ width: '100%', height: '20%' }}/>
          
        <Typography style = {{
            top: '40%',
            left: '50%',
            color: 'white',
            textAlign: 'center',
            transform: 'translate(-50%, -50%)',
            fontSize: '3vw',
            lineHeight: '3.2vw',
            position: 'absolute'}}>
            Welcome to the Wisconsin Decarceration Platform!
        </Typography>

        <LoginButton
            className="loginUser"
            component={Link}
            style = {{left: '40%'}}
            to={ROUTES.SIGN_IN} >Login As User</LoginButton>
        <LoginButton
            className="loginUser"
            component={Link}
            style = {{left: '60%'}}
            to={ROUTES.SIGN_IN} >Login As Provider</LoginButton>


        <LoginButton
            className="loginUser"
            component={Link}
            style = {{left: '40%', top: '70%'}}
            to={ROUTES.SIGN_UP} >Sign Up As User</LoginButton>

        <LoginButton
            className="loginUser"
            component={Link}
            style = {{left: '60%', top: '70%'}}
            to={ROUTES.SIGN_UP} >Sign Up As Provider</LoginButton>

        </div>
            
    </div>
);

export default LandingPage;