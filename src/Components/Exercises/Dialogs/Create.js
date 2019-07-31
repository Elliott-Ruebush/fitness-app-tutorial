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

// TODO: Bring in the muscles list from App.js instead of recreating the same list in the Create component
const muscleList = [
    'Back',
    'Legs',
    'Arms',
    'Chest',
    'Shoulders'
];
// console.log(typeof(muscleList));
// console.log(muscleList)

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
    }
}));

export default function FormDialog(/*muscleList,*/{ onCreate }) {
    const classes = useStyles();
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
        setNewEx({
            'id': '',
            title: '',
            description: '',
            muscles: ''
        })
    }

    const handleChange = name => event => {
        setNewEx({ ...newEx, [name]: event.target.value });
    }

    const handleSubmit = () => {
        //TODO: validation
        onCreate({
            ...newEx,
            id: newEx.title.toLowerCase().replace(/ /g, '-')
        });
        // console.log(newEx);
        setOpen(false);
        setNewEx({
            'id': '',
            title: '',
            description: '',
            muscles: ''
        });
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
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="inherit">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="inherit">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}