import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialog';

const useStyles = makeStyles(theme => ({
  flex: {
    flex: 1
  }
}));

export default function MyHeader({ onCreate }) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant='h4'
          color="inherit"
          className={classes.flex}
        >
          Exercise Database
      </Typography>
        <CreateDialog
          onCreate={onCreate}
        // muscleList={muscles}
        />
      </Toolbar>
    </AppBar>
  )
}
