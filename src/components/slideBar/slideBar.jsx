import React, {useContext, useEffect, useRef, useState} from "react";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import {Box, makeStyles} from "@material-ui/core";
import {BoardContext} from "../../context/boardContext";

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        height: "100vh",
    },
    button:{
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.standard
        }),
        fontSize: "20px",
        position:"absolute",
        top:"50%",
        width:"50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "50px",
        borderRadius: "50%",
        right: "-20px",
        border: "none",
        zIndex: "1",
        backgroundColor: "#34495E",
        textAlign: "right",
        visibility: "visible",
        boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    SlideBar: {
        marginLeft: "90px",
        borderBox: "box-sizing",
        position: "relative",
        height: "100vh",
        maxWidth: "340px",
        backgroundColor: "#F8FAFB",
        display: "flex",
        flexDirection: "column",
        color: "black",
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
    },
        contentWrapper: {
            wordBreak: "break-word",
            borderRight: "1px solid #EFF3F6",
            flexDirection: "column",
            position: "relative",
            display:"flex",
            flex: "1",
        },
        icon: {
            padding: "5px",
            display: "flex",
            alignItems: "center",
            transform: "rotate(-180deg)"
        },
        hide: {
            display: "none"
        },
    video: {
        maxWidth: "100%"
    }
}));

const SlideBar = (props) => {

    const {phase} = useContext(BoardContext);
    const slideEl = useRef(null);
    const classes = useStyles();
    const [state, setState] = useState();
    const [phases, setPhase] = useState(phase);
    //Functions
    const onHandleClick = () => {
        setState(prev => !prev);
    };
    //Lifecycles
    useEffect(() => {
        state ? (slideEl.current.style.width = "340px") && (slideEl.current.style.borderRight = "1px solid #E0E4EA") : (slideEl.current.style.width = "0px") && (slideEl.current.style.borderRight = "none");
    }, [state]);

    return (
        <div className={classes.SlideBar} ref={slideEl}>
            <button onClick={onHandleClick} className={classes.button}>
                <ArrowForwardIosOutlinedIcon className={state && classes.icon} style={{fontSize: "small", paddingRight: "5px", color:"#E0E4EA"}} />
            </button>
            <div style={{flex: "1", overflow: "hidden", position: "relative", zIndex: "100", backgroundColor:"#F8FAFB"}}>
                <Box p={2}>
                    <Box mb={4}>
            <span >
              {props.section}
            </span>
                        <header>
                            <h1>
                                {props.message}
                            </h1>
                        </header>
                    </Box>
                    <Box mb={4}>
                        <h2>
                            {props.message}
                        </h2>
                        <p className={!state && classes.hide}>{props.subMessage}</p>
                    </Box>
                    <section>
                        <h2>
                            Video tutorial
                        </h2>
                        <video className={classes.video} height="auto" controls>
                            <source src="" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </section>
                </Box>
                <Box>
                    {phases && phases.map((item,index) => (
                        <Box key={index} color={item.section.color}>
                            test
                        </Box>
                    ))}
                </Box>
            </div>
        </div>
    )
};

export default SlideBar;