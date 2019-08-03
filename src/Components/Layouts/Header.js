import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialog';

export default function makeHeader({ muscles, onCreate }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h2"
          color="inherit"
          style={{ padding: 10, flex: 1 }}>
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
