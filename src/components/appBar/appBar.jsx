import React, { useRef } from "react";
import { AppBar, Grid, makeStyles, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "../../assets/logo-title.svg";
const useStyles = makeStyles(theme => ({
  root: {
    alignSelf: "baseline",
    padding: "8px",
    backgroundColor: "white",
    borderBottom: "1px solid #ECF0F1",
    width: "auto",
    flex: "1",
    boxShadow: "none"
  },
  menu: {
    height: "2px",
    width: "30px",
    backgroundColor: "#34495E"
  }
}));

const Appbar = props => {
  const appbar = useRef(null);
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position={props.position} ref={appbar}>
      <Box width="100%" display="flex" justifyContent="center">
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          style={{
            transition: "all easing 200ms",
            height: "70px",
            width: "90%"
          }}
        >
          <Grid item xs={6}>
            <img
              src={logo}
              width="100px"
              height="20px"
              alt="Navigation bar with menu"
            />
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Box
              display="flex"
              flexDirection="column"
              height="20px"
              justifyContent="space-between"
            >
              <span className={classes.menu}></span>
              <span className={classes.menu}></span>
              <span className={classes.menu}></span>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
};

Appbar.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default Appbar;
