import useStyles from "./listItemCardStyles"
import Paper from "@material-ui/core/Paper"

const ListItemCard = ({ listItem, index }) => {
    const classes = useStyles()

    return (
        <Paper elevation={1} className={classes.itemContainer}>
            {/* <div className={classes.itemContainer}> */}
            <div className={classes.itemWrapper}>
                <span className={classes.itemNumber}>{index + 1}</span>
                <span className={classes.itemName}>{listItem.itemName}</span>
                <span className={classes.itemDescription}>
                    {listItem.itemDescription}
                </span>
            </div>
            {/* </div> */}
        </Paper>
    )
}

export default ListItemCard
