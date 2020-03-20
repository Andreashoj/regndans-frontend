import React from "react";
import {FormControl, Input, InputLabel} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        margin: theme.spacing(2)
    },
}));

const Form = ({labels}) => {
        const classes = useStyles();
        return(
            <form className={classes.root}  autoComplete="off">
                {labels.map(item => (
                    /*
                    * TODO:
                    *  Make the content Dynamic so it doesnt matter what type of element is being used.
                    * EG: If there is a dropdown menu, it' should be displayed in the right order.
                    * */
                        <FormControl fullWidth key={item.key}>
                            <InputLabel htmlFor={item.htmlFor}> {item.value} </InputLabel>
                            <Input id="my-input" name={item.htmlFor} value={item.value} aria-describedby="my-helper-text" />
                        </FormControl>
                ))}
                    <Button color="warning" type="submit">
                        Submit
                    </Button>
            </form>
        )
};

Form.propTypes = {
    labels: PropTypes.arrayOf({
        key: PropTypes.int,
        htmlFor: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })
}

export default Form;