import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Team from "../team";
import SlideBar from "../slideBar";
import { Box, Grid } from "@material-ui/core";
import Appbar from "../appBar";
import Canvas from "../canvas";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  root: {
    position: "relative",
    height: "100vh",
  },
  main: {
    maxWidth: "900px",
    margin: "0 auto",
  },
}));

const BoardSection = ({ phase, part }) => {
  const classes = useStyles();
  /**
   * TODO:
   * 1. Render sections based on the active phase from board component
   * 2. Split each sections up in components so if phase is problem then render the problem component etc..
   *
   */
  return (
    <div className={classes.container}>
      <Team />
      <SlideBar
        section="Problem and Definition"
        sectionPhase="The person"
        message="If you can read this perfectly, then that's good. This will come In handy during long reading sessions"
        subMessage="will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        phase={phase}
      />
      <Grid container>
        <Grid item xs={12}>
          <Appbar color="primary" position="static" />
        </Grid>
        <Grid item xs={12}>
          {phase === "problem" ? (
            <Box className={classes.main}>
              <Canvas
                title="Draw the person"
                message="Drawing of target person"
              />
            </Box>
          ) : (
            <Box m={4}>
              <h1>problem</h1>
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

BoardSection.propTypes = {
  phase: PropTypes.string.isRequired,
  part: PropTypes.arrayOf(
    PropTypes.shape({
      part: PropTypes.int,
      active: PropTypes.bool.isRequired,
    })
  ),
};

export default BoardSection;
