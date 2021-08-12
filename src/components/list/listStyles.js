import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    list: {
        fontSize: "20px",
        "&:hover": {
            backgroundColor: "#FFA03E",
        },
    },
}))

export default useStyles
