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
    MenuItem
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function FormDialog() {
    //TODO: Bring in the muscles list from App.js instead of recreating the same list in the Create component
    const muscleList = [
        'Back',
        'Legs',
        'Arms',
        'Chest',
        'Shoulders'
    ];

    const [open, setOpen] = React.useState(false);
    const [newEx, setNewEx] = React.useState({
        'id': '',
        title: '',
        description: '',
        muscles: ''

    })

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    const handleChange = name => event => {
        setNewEx({ ...newEx, [name]: event.target.value });
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
                    <form>
                        <TextField
                            id="set-title"
                            label="Exercise Title"
                            // className={classes.textField}
                            value={newEx.title}
                            onChange={handleChange('title')}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            id="set-desc"
                            multiline
                            rows="3"
                            label="Exercise Description"
                            value={newEx.description}
                            onChange={handleChange('description')}
                            margin="normal"
                        />
                        <br />
                        <TextField
                            id="select-category"
                            select
                            label="Select Muscle"
                            // className={classes.textField}
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
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="inherit">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="inherit">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}