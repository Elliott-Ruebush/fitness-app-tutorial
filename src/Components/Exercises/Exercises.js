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


const useStyles = makeStyles(theme => ({
    paperStyle: {
        padding: theme.spacing(2),
        // marginBottom: 10, NO LONGER NEED DUE TO THE ADDITION OF CSSBASELINE 
        [theme.breakpoints.up('sm')]: {
            marginTop: 5,
            height: 'calc(100% - 10px)'
        },
        [theme.breakpoints.down('xs')]: {
            height: '100%'
        },
        overflowY: 'auto'
    },
    secondaryButtons: {
        marginRight: '5px'
    },
    '@global': {
        'html, body, #root': {
            height: '100vh'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px - 48px)'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100% - 56px - 48px)'
        }
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            height: '50%'
        }
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
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={6} className={classes.item}>
                <Paper className={classes.paperStyle}>
                    {exercises.map(([group, exercises]) =>
                        (!category || category === group)
                            ? <Fragment key={group}>
                                <Typography
                                    variant='h6'
                                    style={{ textTransform: 'capitalize' }}
                                    color='secondary'
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
                                                    color='primary'
                                                    aria-label='edit'
                                                    onClick={() => onSelectEdit(id)}
                                                    className={classes.secondaryButtons}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    edge='end'
                                                    color='primary'
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
            <Grid item xs={12} sm={6} className={classes.item}>
                <Paper className={classes.paperStyle}>
                    <Typography
                        variant='h3'
                        gutterBottom
                        color="secondary"
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