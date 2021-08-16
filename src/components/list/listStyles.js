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
    topWrapper: {
        display: "flex",
        alignItems: "center",
    },
    editTitleIcon: {
        color: "#3f51b5",
        cursor: "pointer",
        marginLeft: "15px",
    },
    modalListName: {
        color: "red",
        fontSize: "22px",
        fontWeight: "600",
    },
}))

export default useStyles
