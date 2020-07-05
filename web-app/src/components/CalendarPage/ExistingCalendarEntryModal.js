import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const ExistingCalendarEntryModal = props => {
    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            top: "30%",
            left: "50%",
            width: 400,
            transform: "translate(-50%, -30%)",
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    console.log(props.event.start)
    return (
        < Modal
            open={props.modal}
            onClose={props.toggle}
        >
           <div className={classes.paper}>
                <h3>{props.event.title}</h3>
                <label>Start: 
                <p>{String(props.event.start)}</p></label>
                <label>End: 
                <p>{String(props.event.end)}</p></label>
                <label>Description:
                <p>{props.event.description}</p></label>
                <label>Location:
                <p>{props.event.location}</p> </label>
           </div>
        </ Modal>
        
    )
}
export default ExistingCalendarEntryModal