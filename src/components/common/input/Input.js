import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}))

const MyInput = ({ label, inputClassName, onChange, onBlur }) => {
    const classes = useStyles()

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <TextField
                id='outlined-basic'
                label={label}
                variant='outlined'
                size='small'
                className={inputClassName}
                onChange={onChange}
                onBlur={onBlur}
            />
        </form>
    )
}

export default MyInput
