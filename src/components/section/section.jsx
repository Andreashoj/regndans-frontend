import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Team from "../team";
import SlideBar from "../slideBar";
import { Box, Grid } from "@material-ui/core";
import Appbar from "../appBar";
import Canvas from "../canvas";
import Board from "../board";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex"
  },
  root: {
    position: "relative",
    height: "100vh"
  },
  main: {
    maxWidth: "900px",
    margin: "0 auto"
  }
}));

const BoardSection = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Team />
      <SlideBar
        section="Problem and Definition"
        sectionPhase="The person"
        message="If you can read this perfectly, then that's good. This will come In handy during long reading sessions"
        subMessage="will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      />
      <Grid container>
        <Grid item xs={12}>
          <Appbar position="static" />
        </Grid>
        <Grid item xs={12}>
          <Box className={classes.main}>
            <Canvas
              title="Draw the person"
              message="Drawing of target person"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default BoardSection;
