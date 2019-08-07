import React, { Fragment } from 'react';
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    makeStyles
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Create';
import ExerciseForm from './ExerciseForm';
import { getThemeProps } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    paperStyle: {
        padding: 20,
        marginTop: 5,
        // marginBottom: 10, NO LONGER NEED DUE TO THE ADDITION OF CSS BASELINE 
        height: 500,
        overflowY: 'auto'
    },
    secondaryButtons: {
        marginRight: '5px'
    }
}));

export default function Exercises({
    exercises,
    category,
    onSelect,
    exercise,
    exercise: {
        id,
        title = 'Welcome: ',
        description = 'Select an exercise to learn more!'
    },
    onDelete,
    onSelectEdit,
    editMode,
    onEdit
}) {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paperStyle}>
                    {exercises.map(([group, exercises]) =>
                        (!category || category === group)
                            ? <Fragment key={group}>
                                <Typography
                                    variant='h6'
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ id, title }) =>
                                        <ListItem
                                            key={id}
                                            button
                                            onClick={() => onSelect(id)}
                                        >
                                            <ListItemText primary={title} />
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    edge='end'
                                                    aria-label='edit'
                                                    onClick={() => onSelectEdit(id)}
                                                    className={classes.secondaryButtons}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    edge='end'
                                                    aria-label='delete'
                                                    onClick={() => onDelete(id)}
                                                    className={classes.secondaryButtons}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )}
                                </List>
                            </Fragment>
                            : null
                    )}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paperStyle}>
                    <Typography
                        variant='h3'
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    {editMode
                        ? <ExerciseForm
                            onSubmit={onEdit}
                            exercise={exercise}
                            buttonText={'Edit'}
                        />
                        : <Typography
                            variant='body1'>
                            {description}
                        </Typography>
                    }
                </Paper>
            </Grid>
        </Grid>
    )
}