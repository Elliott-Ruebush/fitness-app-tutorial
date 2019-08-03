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
        marginTop: 10,
        marginBottom: 10,
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
            <Grid item sm>
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
                                                    aria-label='delete'
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
            <Grid item sm>
                <Paper className={classes.paperStyle}>
                    {editMode
                        ? <ExerciseForm 
                            onSubmit={onEdit}
                            exercise={exercise}
                        />
                        : <Fragment>
                            <Typography
                                variant='h3'>
                                {title}
                            </Typography>
                            <Typography
                                variant='body1'
                                style={{ marginTop: 20 }}>
                                {description}
                            </Typography>
                        </Fragment>
                    }
                </Paper>
            </Grid>
        </Grid>
    )
}