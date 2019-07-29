import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create';

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="h2"
        color="inherit"
        style={{ padding: 10, flex: 1 }}>
        Exercise Database
      </Typography>
      <CreateDialog />
    </Toolbar>
  </AppBar>
)
