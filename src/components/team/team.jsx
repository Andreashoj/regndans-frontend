import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Box, CardMedia} from "@material-ui/core";
import Logo from "../../assets/logo.svg";
const useStyles = makeStyles(theme => ({
    teamBar: {
        display: "flex",
        flexDirection: "column",
        flex: "1",
        position: "fixed",
        alignItems: "center",
        left: 0,
        justifyContent: "space-between",
        width:"90px",
        zIndex: 10000,
        height: "100%",
        backgroundColor: "#34495E",
    },
    media:{
        marginTop: "32px",
        width: "50px",
        height: "50px"

    }
}));

const Team = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.teamBar}>
            <Box>
                <CardMedia
                    className={classes.media}
                    image={Logo}
                    title="Logo"
                />
                <CardMedia
                    className={classes.media}
                    image={Logo}
                    title="Logo"
                />
                <CardMedia
                    className={classes.media}
                    image={Logo}
                    title="Logo"
                />
            </Box>
            <Box>
                <CardMedia
                    className={classes.media}
                    image={Logo}
                    title="Logo"
                />
                <CardMedia
                    className={classes.media}
                    image={Logo}
                    title="Logo"
                />
            </Box>

    </Grid>
            )
};

export default Team;