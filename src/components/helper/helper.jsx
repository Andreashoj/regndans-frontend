import React, {useState } from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "red",
    position: "relative",
    height: "auto",
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: "translateX(100px)"
  },
  slide: {
    position: "relative",
    height: "100vh",
    zIndex: theme.zIndex.drawer,
    transform: "none",
  },
  reset: {
    transform: "translateX(0px)",
    maxWidth: "0px",
  },
  contentWrapper: {
    wordBreak: "break-word",
    borderRight: "1px solid #EFF3F6",
    flexDirection: "column",
    position: "relative",
    height:"100%",
    backgroundColor: "#F8FAFB ",
  },
  button:{
    backgroundColor: "#F8FAFB",
    position: "absolute",
    top:"50%",
    width:"50px",
    height: "50px",
    borderRadius: "50%",
    right: "-20px",
    border: "none",
    zIndex: "-1",
    visibility: "visible",
    boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
  }

}));

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
    <div className={checked ? classes.root : classes.reset}>
      <Slide className={classes.slide} direction="right" in={checked} >
      <div>
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
        </div>
    </Slide>
   
  </div>
  );
}

export default Helper;

