import React from "react"
import Button from "@material-ui/core/Button"
import useStyles from "./buttonStyles"

export default function ContainedButtons({ buttonText, onClick }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Button onClick={onClick} variant='contained' color='primary'>
                {buttonText}
            </Button>
        </div>
    )
}
