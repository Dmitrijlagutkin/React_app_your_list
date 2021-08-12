import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    headerBackground: {
        width: "100vw",
        backgroundColor: "#E0B8B9",
    },
    header: {
        textAlign: "center",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
    },
}))

export default useStyles
