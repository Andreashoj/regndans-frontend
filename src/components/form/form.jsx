import React, {useState} from "react";
import {FormControl, Input, InputLabel, Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
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

const Form = ({labels}) => {
        const classes = useStyles();

        let htmlFor = labels.map(item =>{
            return item.htmlFor;
        });

        const [label, setLabel] = useState({}, ...htmlFor);
        const handleChange = (e) => {
        setLabel({
            ...label,
            [e.target.name]: e.target.value
        } )
    };

        const handleSubmit = e => {
            e.preventDefault();
        };

        return(
            <form onSubmit={handleSubmit} className={classes.root} method="POST" action="#" autoComplete="off">
                {labels.map(item => (
                    /*
                    * TODO:
                    *  Make the content Dynamic so it doesnt matter what type of element is being used.
                    * EG: If there is a dropdown menu, it' should be displayed in the right order.
                    * */
                        <FormControl fullWidth key={item.key}>
                            <InputLabel htmlFor={item.htmlFor}> {item.value} </InputLabel>
                            <Input id="my-input" name={item.htmlFor} placeholder={item.htmlFor} value={label.htmlFor} onChange={handleChange} aria-describedby="my-helper-text" />
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
        )
};

Form.propTypes = {
  labels: PropTypes.arrayOf({
    key: PropTypes.int,
    htmlFor: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
};

export default Form;
