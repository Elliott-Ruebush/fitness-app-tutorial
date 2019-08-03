import React, { Fragment, useState } from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    DialogContentText,
    Icon,
    Fab,
    TextField,
    MenuItem,
    makeStyles
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { getThemeProps } from '@material-ui/styles';
import { blockStatement } from '@babel/types';


// TODO: Bring in the muscles list from App.js instead of recreating the same list in the Create component
const muscleList = [
    'Back',
    'Legs',
    'Arms',
    'Chest',
    'Shoulders'
];

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500
    },
    menu: {
        width: 200
    },
    add_button: {
        display: 'block',
        width: 500,
        color: 'white',
        backgroundColor: '#3F51B5'
    }
}));


export default function ExerciseForm({ onSubmit, exercise, buttonText }) {
    const classes = useStyles();
    const getInitState = () => {
        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }
    //To fix the error of exercise not updating, possibly just 
    const [newEx, setNewEx] = React.useState(getInitState)

    React.useEffect(() => {
        setNewEx({ ...exercise });
        console.log("use effect exercise: " + exercise);
    }, [exercise]);

    const handleChange = name => event => {
        setNewEx({ ...newEx, [name]: event.target.value });
    }

    const handleSubmit = () => {
        //TODO: validation
        onSubmit({
            id: newEx.title.toLowerCase().replace(/ /g, '-'),
            ...newEx
        });
        // console.log(newEx);
        // setOpen(false);
        setNewEx(getInitState);
    }

    return (
        <form className={classes.container} noValidate autoComplete='off'>
            <TextField
                id="set-title"
                label="Exercise Title"
                className={classes.textField}
                value={newEx.title}
                onChange={handleChange('title')}
                margin="normal"
            />
            <TextField
                id="select-category"
                select
                label="Select Muscle"
                className={classes.textField}
                value={newEx.muscles}
                onChange={handleChange('muscles')}
                // SelectProps={{
                //     MenuProps: {
                //         className: classes.menu,
                //     },
                // }}
                helperText="Please give muscle category"
                margin="normal"
            >
                {muscleList.map(option => (
                    <MenuItem key={option} value={option.toLowerCase()}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                id="set-desc"
                multiline
                rows="3"
                className={classes.textField}
                label="Exercise Description"
                value={newEx.description}
                onChange={handleChange('description')}
                margin="normal"
            />

            <Button
                onClick={handleSubmit}
                color="primary"
                className={classes.add_button}
            >
                {buttonText ? buttonText : "Add"}
            </Button>

        </form>
    )

}