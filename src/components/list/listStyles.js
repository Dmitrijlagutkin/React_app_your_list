import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    list: {
        fontSize: "20px",
        "&:hover": {
            backgroundColor: "#FFA03E",
        },
    },
    titleWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10px",
    },
    title: {
        fontSize: "20px",
        padding: "10px",
        fontWeight: "600",
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
