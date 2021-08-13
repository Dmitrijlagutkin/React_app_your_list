import React from "react"
import Button from "@material-ui/core/Button"
import useStyles from "./buttonStyles"

export default function ContainedButtons({ buttonText, onClick, disabled }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Button
                onClick={onClick}
                variant='contained'
                color='primary'
                disabled={disabled}>
                {buttonText}
            </Button>
        </div>
    )
}
