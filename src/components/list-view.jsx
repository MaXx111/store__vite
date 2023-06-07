import ListItem from './list-item'
import { v4 } from 'uuid'

function ListView({products}) {
    
    return (
        <>
            {products.map(item => {
                let id = v4();
                return <ListItem key={id} data={item} />
            })}
        </>
    )
}

export default ListView