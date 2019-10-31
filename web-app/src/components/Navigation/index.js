import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import * as ROUTES from '../../constants/routes';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Navigation = () => (
    <div>
        <AppBar style={{backgroundColor:"#32a852"}} position="static">
            <Toolbar>
                <Button style={{left:'0%', marginRight: '5%'}} edge="start" color="black" aria-label="Menu">
                    <MenuIcon />
                </Button>
                <Typography variant="h5">
                    Wisonsin Decarceration Platform
                </Typography>
                <Button style={{position: 'fixed', right: '2.5%', color:'black'}} component={Link} to={ROUTES.SIGN_IN} contained color="inherit"><b>Login</b></Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default Navigation;