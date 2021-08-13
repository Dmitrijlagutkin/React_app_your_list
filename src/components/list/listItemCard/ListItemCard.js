const ListItemCard = ({ listItem, index, title }) => {
    console.log("title", title)
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <span>{index + 1}</span>
                <p>{listItem.text}</p>
                <span>{listItem.description}</span>
            </div>
        </div>
    )
}

export default ListItemCard
