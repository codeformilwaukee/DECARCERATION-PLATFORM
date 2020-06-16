import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './navigation.css'
import '../../index.css'
import * as ROUTES from '../../constants/routes';


const Navigation = () => (
    <div class="nav">
        <ul>
            <Link to={"/"}>
                <li>Home</li>
            </Link>
            <Link to={"#"}>
                <li>Reentry Services</li>
            </Link>
            <Link to={"#"}>
                <li>Events</li>
            </Link>
            <Link to={"#"}>
                <li>Help</li>
            </Link>
            <Link to={"/signin"}>
                <li class="login">(Sign In/Up)</li>
            </Link>
        </ul>
    </div>
);



/*
const Navigation = () => (
    <div>
        <AppBar style={{backgroundColor:"#32a852"}} position="static">
            <Toolbar style={{position:"relative"}}>
                <Button style={{left:'0%', marginRight: '5%'}} edge="start" color="black" aria-label="Menu">
                    <MenuIcon />
                </Button>
                <Typography variant="h5">
                    Wisconsin Decarceration Platform
                </Typography>
                <Button style={{position: 'absolute', right: '2.5%', color:'black'}} component={Link} to={ROUTES.SIGN_IN} contained color="inherit"><b>Login</b></Button>
            </Toolbar>
        </AppBar>
    </div>
);
*/

export default Navigation;