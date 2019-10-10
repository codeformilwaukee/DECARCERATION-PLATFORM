import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div>
        <AppBar style={{backgroundColor:"#32a852"}} position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="Meny" />
                <Typography variant="h5">
                    Wisonsin Decarceration Platform
                </Typography>
                <Button component={Link} to={ROUTES.SIGN_IN} color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default Navigation;