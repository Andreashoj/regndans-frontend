import React from "react";
import {FormControl, Input, InputLabel} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    },
}));

const Form = ({labels}) => {
        const classes = useStyles();

        return(
            <form className={classes.root} noValidate autoComplete="off">
                {labels.map(item => (
                        <FormControl key={item.key}>
                            <InputLabel htmlFor={item.htmlFor}> {item.value} </InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                ))}
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