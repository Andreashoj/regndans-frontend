import React, {useState, useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Team from "../team";
import SlideBar from "../slideBar";
import {Box, Grid} from "@material-ui/core";
import Appbar from "../appBar";
import Canvas from "../canvas";
import Board from "../board";

const useStyles = makeStyles(theme => ({
    container:{
        display:"flex",
    },
    root: {
        position: "relative",
        height: "100vh",
    },
    main: {
        maxWidth: "900px",
        margin: "0 auto"
    }
}));

const BoardSection = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Team />
            <SlideBar  section="Problem and Definition" message="some text" subMessage="Some sub text" />
            <Grid container>
                <Grid item xs={12}>
                    <Appbar color="primary" position="static"/>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.main}>
                        <Canvas title="Draw the person" message="Drawing of target person" />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
};

export default BoardSection;