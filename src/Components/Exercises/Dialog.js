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
import ExerciseForm from './ExerciseForm';


// console.log(typeof(muscleList));
// console.log(muscleList)

export default function FormDialog(/*muscleList,*/{ onCreate }) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleFormSubmit(exercise) {
        handleClose();
        onCreate(exercise);
    }



    return (
        <Fragment>
            <Fab
                // color="white"
                aria-label="add"
                size="large"
                onClick={handleClickOpen}
            >
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create New Exercise</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill out the form to add an exercise
                    </DialogContentText>
                    <ExerciseForm
                        // muscleList={muscles}
                        onSubmit={handleFormSubmit}
                    />
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}