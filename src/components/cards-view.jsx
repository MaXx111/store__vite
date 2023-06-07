import CardItem from './card-item'
import { v4 } from 'uuid'

function CardsView({products}) {

    return (
        <>
            {products.map(item => {
                let id = v4();
                return <CardItem key={id} data={item} />
            })}
        </>
    )
}

export default CardsView