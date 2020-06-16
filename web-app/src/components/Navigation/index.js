import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div>
        <AppBar style={{backgroundColor:"#32a852"}} position="static">
            <Toolbar>
                <Button style={{left: '0%', marginRight: '5%', color: 'black'}} edge="start" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </Button>
                <Typography variant="h5">
                    Wisconsin Decarceration Platform
                </Typography>
                <Button style={{position: 'absolute', right: '2.5%', color: 'black'}} component={Link} to={ROUTES.SIGN_IN} contained="true" color="inherit"><b>Login</b></Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default Navigation;