function ListItem({data}) {

    return (
        <>
            <article className="product-item__list">
            <img src={data.img} alt="" className="list__img"/>
            <h2 className="list__title">{data.name}</h2>
            <span className="list__subtitle">{data.color}</span>
            <span className="list__info__price">${data.price}</span>
            <button className="info__button">Добавить в корзину</button>
            </article>
        </>
    )
}

export default ListItem