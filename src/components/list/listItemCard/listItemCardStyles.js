import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        display: "flex",
        justifyContent: "space-between",
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
    iconWrapper: {
        textAlign: "end",
    },
    icon: {
        fontSize: "18px",
        paddingLeft: "20px",
        cursor: "pointer",
    },
}))

export default useStyles
