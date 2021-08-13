import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import CloseIcon from "@material-ui/icons/Close"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    modal: {
        padding: "15px 10px",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
    },
    title: {
        fontWeight: "800",
    },
    closeBackButton: {
        cursor: "pointer",
    },
}))

export default function Modal({
    children,
    title,
    withCloseButton = false,
    withBackButton = false,
    onClose,
    onClick,
}) {
    const classes = useStyles()

    return (
        <div className={classes.root} onClick={onClose}>
            <Paper
                className={classes.modal}
                elevation={3}
                onClick={(e) => e.stopPropagation()}>
                <div className={classes.header}>
                    {withBackButton ? (
                        <ArrowBackIcon
                            size='small'
                            className={classes.closeBackButton}
                        />
                    ) : (
                        <span />
                    )}
                    <span className={classes.title}>{title}</span>
                    {withCloseButton ? (
                        <CloseIcon
                            size='small'
                            className={classes.closeBackButton}
                            onClick={onClose}
                        />
                    ) : (
                        <span />
                    )}
                </div>
                {children}
            </Paper>
        </div>
    )
}
