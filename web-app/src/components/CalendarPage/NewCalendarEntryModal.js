import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useInput } from '../../hooks/useInput';



const NewCalendarEntryModal = (props) => {

    //state using custom hooks
    const [title, setTitle,handleTitle] = useInput("");
    const [description,setDescription, handleDescription] = useInput("");
    const [location,setLocation, handleLocation] = useInput("");
    const [repeat,setRepeat] = useState(false);

    //modal setup
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

    //submit function, sends state to parent and into currEvent state on paren
    const handleSubmit =(e) => {
        console.log(e)
        e.preventDefault()
        console.log(title,description,location,repeat)
        props.handleCreate({
            title: title,
            repeat: repeat,
            description: description,
            location: location
        })
        props.toggle();
        setTitle("")
        setDescription("")
        setLocation("")
        setRepeat("")
    }
    
    return (
        < Modal
            open={props.modal}
            onClose={props.toggle}
        >
           <div className={classes.paper}>
                <h3>Create a new event:</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        Title: &nbsp;
                        <input
                        type="text"
                        placeholder="title"
                        name="title"
                        onChange={e=>handleTitle(e.target.value)}
                        value={title}
                        />
                    </label>
                    <br/><br/>
                    <label htmlFor="repeat">
                        Does this event repeat? &nbsp;
                        <input
                        type="checkbox"
                        name="repeat"
                        onChange={e=>setRepeat(!repeat)}
                        value={repeat}
                        />
                    </label>
                    <br/><br/>
                    <label htmlFor="description">
                        Event description: &nbsp;
                        <input
                        type="textbox"
                        placeholder="description"
                        name="description"
                        onChange={e=>handleDescription(e.target.value)}
                        value={description}
                        />
                    </label>
                    <br/><br/>
                    <label htmlFor="location">
                        Event location: &nbsp;
                        <input
                        type="text"
                        placeholder="location"
                        name="location"
                        onChange={e=>handleLocation(e.target.value)}
                        value={location}
                        />
                    </label>
                    <br/><br/>
                    <button>submit</button>
                </form>
                
           </div>
        </ Modal>
        
    )
}

export default NewCalendarEntryModal