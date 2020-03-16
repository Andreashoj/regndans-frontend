import React, { useState } from 'react'
import {AppBar, Grid, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    height:"50px", 
  }
}));

const Appbar = ({props}) => {
  const classes = useStyles();
  return (
    <AppBar color="secondary" className={classes.root} position="static">
      <Grid container>
        <Grid item xs={6}>
          <h1>test</h1>
        </Grid>
        <Grid item xs={6}>  
          <p>test</p>
        </Grid>
      </Grid>
    </AppBar>
  );
};

Appbar.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default Appbar;

