import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
    },
    modalChildren: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputClassName: {
        width: "280px",
    },
    error: {
        color: "red",
        fontSize: "12px",
        paddingLeft: "10px",
    },
}))

export default useStyles
