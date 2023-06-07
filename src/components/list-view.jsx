import ListItem from './list-item'

function ListView({products}) {
    const res = products.map(function(item) {
        return (
            <>
                <ListItem data={item} />
            </>
        )
    })

    return (
        <>
            {res}
        </>
    )
}

export default ListView