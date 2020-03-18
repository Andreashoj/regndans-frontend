import React, { useState, useRef } from 'react'
import {AppBar, Grid, Box, makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    height:"50px",
    width: "auto",
    flex: "1",
  }
}));

const Appbar = (props) => {

  const appbar = useRef(null);

  const classes = useStyles();
  return (
    <AppBar color="secondary" className={classes.root} position="static" ref={appbar} >
      <Grid container style={{transition: "all easing 200ms"}}>
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

