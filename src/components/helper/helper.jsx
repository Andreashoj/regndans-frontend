import React, {useState, useRef, useEffect} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid} from "@material-ui/core";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import Canvas from "../canvas";
import Appbar from "../appBar";
const useStyles = makeStyles(theme => ({
  container:{
    display:"flex",
  },
  root: {
    backgroundColor: "red",
    position: "relative",
    height: "100vh",
  },
  contentWrapper: {
    wordBreak: "break-word",
    borderRight: "1px solid #EFF3F6",
    flexDirection: "column",
    position: "relative",
    display:"flex",
    flex: "1",
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
    borderBox: "box-sizing",
    borderRight: "1px solid #E0E4EA",
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
  icon: {
    padding: "5px",
    display: "flex",
    alignItems: "center",
    transform: "rotate(-180deg)"
  },
  hide: {
    display: "none"
  },
  main: {
    maxWidth: "900px",
    margin: "0 auto"
  }
}));

const SlideBar = (props) => {

  const slideEl = useRef(null);
  const classes = useStyles();
  const [state, setState] = useState(true);

  //Functions 
  const onHandleClick = () => {
    setState(prev => !prev);
  };

  //Lifecycles 
  useEffect(() => {
    state ? (slideEl.current.style.width = "340px") : slideEl.current.style.width = "0px";
  }, [state]);
  
  return (
    <div className={classes.SlideBar} ref={slideEl}>
      <button onClick={onHandleClick} className={classes.button}>
        <ArrowForwardIosOutlinedIcon className={state && classes.icon} style={{fontSize: "small", paddingRight: "5px", color:"#E0E4EA"}} />
      </button>
      <div style={{flex: "1", overflow: "hidden", position: "relative", zIndex: "100", backgroundColor:"#F8FAFB"}}>
        <span style={{padding: "0px 20px"}} >
          {props.section}
        </span>
        <header>
          <h1>
            {props.message}
          </h1>
        </header>
        <section>
          <h2>
            {props.message}
          </h2>
          <p style={{padding: "0px 20px"}} className={!state && classes.hide}>{props.subMessage}</p>
        </section>
        <section>
          <h2>
            Video tutorial
          </h2>
          <video width="320" height="240" controls>
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </div>
  )
}


const Helper = (props) => {

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState({
    left: false
  });

  const handleChange = () => {
    setChecked(prev => !prev);
  }

  return (
      <>
      <div className={classes.container}>
        <SlideBar section="DEFINING PERSON & PROBLEM" message={props.message} subMessage={props.subMessage}>
          <div className={classes.contentWrapper}>
            <header>
              <span>Defining PERSON & PROBLEM</span>
            </header>
            <section>
              <h1>
                {props.title}
              </h1>
              <p>{props.message}</p>
            </section>
            <section>
              <h2>
                {props.subTitle}
              </h2>
              <p>{props.subMessage}</p>
            </section>
            <footer>
              <img src={props.image} alt="some image"/>
            </footer>
            <button className={classes.button}  onClick={handleChange}> 
            .
            </button>
          </div>
        </SlideBar>
        <Grid container>
          <Grid item xs={12}>
          <Appbar />
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.main}>
              <Canvas title="Draw the person" message="Drawing of target person" />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Helper;

