import React, { useState, useRef } from 'react'
import {AppBar, Grid, Box, makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "../../assets/logo-title-under.svg";
const useStyles = makeStyles(theme => ({
  root: {
    alignSelf: "baseline",
    padding: "8px",
    backgroundColor: "none",
    borderBottom: "1px solid black",
    width: "auto",
    flex: "1",
    boxShadow: "none"
  }
}));

const Appbar = (props) => {
  const appbar = useRef(null);
  const classes = useStyles();
  return (
    <AppBar color="none" className={classes.root} position="static" ref={appbar} >
      <Grid container style={{transition: "all easing 200ms"}}>
        <Grid item xs={6} >
            <img src={logo} width="50px" height="50px" alt="Logo image"/>
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

