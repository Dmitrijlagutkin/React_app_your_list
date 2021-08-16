import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        display: "flex",
        justifyContent: "start",
        margin: "0 auto",
        alignItems: "center",
        marginTop: "10px",
        width: "500px",
        padding: "10px",
    },
    itemWrapper: {
        display: "flex",
        fontSize: "18px",
    },
    itemNumber: {
        paddingRight: "40px",
        width: "40px",
    },
    itemName: {
        paddingRight: "40px",
        width: "100px",
    },
}))

export default useStyles
