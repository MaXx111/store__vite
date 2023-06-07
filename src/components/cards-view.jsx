import CardItem from './card-item'

function CardsView({products}) {

    const res = products.map(function(item) {
        return (
            <>
                <CardItem data={item} />
            </>
        )
    })

    return (
        <>
            {res}
        </>
    )
}

export default CardsView