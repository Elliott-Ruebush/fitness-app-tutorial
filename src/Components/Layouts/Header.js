import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography 
      variant="h2" 
      color="inherit"
      style={{padding: 10}}>
        Exercise Database
      </Typography>
    </Toolbar>
  </AppBar>
)
