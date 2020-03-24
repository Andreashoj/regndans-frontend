import React, { useContext, useEffect, useRef, useState } from "react";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { BoardContext } from "../../context/boardContext";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    height: "100vh"
  },
  button: {
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.standard
    }),
    fontSize: "20px",
    position: "absolute",
    top: "50%",
    width: "50px",
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
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
  },
  SlideBar: {
    marginLeft: "90px",
    borderBox: "box-sizing",
    position: "relative",
    height: "100vh",
    maxWidth: "440px",
    backgroundColor: "#F8FAFB",
    display: "flex",
    flexDirection: "column",
    color: "black",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  contentWrapper: {
    wordBreak: "break-word",
    borderRight: "1px solid #EFF3F6",
    flexDirection: "column",
    position: "relative",
    display: "flex",
    flex: "1"
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
  },
  spanLine: {
    width: "100%",
    height: "2px",
    backgroundColor: "#ECF0F1",
    borderRadius: "10px",
    margin: "10px 0"
  },
  activeBar: {
    opacity: "1"
  },
  inactiveBar: {
    opacity: "0",
    visibility: "hidden"
  }
}));

const SlideBar = props => {
  const { phase } = useContext(BoardContext);
  const [sidebarClass, setSidebarClass] = useState("inactiveBar");
  const slideEl = useRef(null);
  const classes = useStyles();
  const [state, setState] = useState(false);
  const [phases, setPhase] = useState(phase);
  //Functions
  const onHandleClick = () => {
    setState(prev => !prev);
  };
  //Lifecycles
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setSidebarClass("activeBar");
      }, 200);
    } else {
      setSidebarClass("inactiveBar");
    }

    state
      ? (slideEl.current.style.width = "440px") &&
        (slideEl.current.style.borderRight = "1px solid #E0E4EA")
      : (slideEl.current.style.width = "0px") &&
        (slideEl.current.style.borderRight = "none");
  }, [state]);

  return (
    <div className={classes.SlideBar} ref={slideEl}>
      <button onClick={onHandleClick} className={classes.button}>
        <ArrowForwardIosOutlinedIcon
          className={state && classes.icon}
          style={{ fontSize: "small", paddingRight: "5px", color: "#E0E4EA" }}
        />
      </button>
      <div
        style={{
          flex: "1",
          overflow: "hidden",
          position: "relative",
          zIndex: "100",
          backgroundColor: "#F8FAFB"
        }}
      >
        <Box
          p={2}
          style={
            state
              ? { transition: "all 0.5s ease" }
              : { transition: "all 0s ease" }
          }
          className={classes[sidebarClass]}
        >
          <Box mb={4}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="caption" color="textSecondary">
                {props.section.toUpperCase()}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#BDBDBD",
                  color: "white",
                  width: "20px",
                  padding: "0px 7px",
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                1/2
              </Typography>
            </Box>
            <header>
              <Typography
                variant="h5"
                color="textPrimary"
                style={{ fontWeight: "600", margin: "30px 0 10px 0" }}
              >
                {props.sectionPhase}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {props.message}
              </Typography>
            </header>
          </Box>
          <Box mb={4}>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "600", marginBottom: "10px" }}
              color="textPrimary"
            >
              Why do we use it?
            </Typography>
            <Typography
              variant="body2"
              paragraph={true}
              className={!state && classes.hide}
            >
              {props.subMessage}
            </Typography>
            <Box className={classes.spanLine}></Box>
            <section>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                style={{ fontWeight: "600", marginBottom: "10px" }}
              >
                Video tutorial
              </Typography>
              <video className={classes.video} height="auto" controls>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>
            <Box>
              {phases &&
                phases.map((item, index) => (
                  <Box key={index} color={item.section.color}>
                    test
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default SlideBar;
