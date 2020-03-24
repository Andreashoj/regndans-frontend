import React from "react";
import { FormControl, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "../button/button";
import TextField from "../textField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    margin: theme.spacing(2),
    width: "50%",
    marginLeft: "30px"
  }
}));

const Form = ({ labels }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off">
      {labels.map(item => (
        /*
         * TODO:
         *  Make the content Dynamic so it doesnt matter what type of element is being used.
         * EG: If there is a dropdown menu, it' should be displayed in the right order.
         * */
        <FormControl fullWidth key={item.key}>
          <TextField label={item.htmlFor} type={item.type}>
            {item.value}
          </TextField>
        </FormControl>
      ))}
      <Box width="100%" display="flex" justifyContent="flex-end">
        <Box width="60%">
          <Button type="submit">Submit</Button>
          <Typography
            variant="body2"
            color="overline"
            style={{ marginTop: "10px", fontSize: "12px" }}
          >
            Click submit when you think the tasks are finished
          </Typography>
        </Box>
      </Box>
    </form>
  );
};

Form.propTypes = {
  labels: PropTypes.arrayOf({
    key: PropTypes.int,
    htmlFor: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

export default Form;
