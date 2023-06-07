function CardItem({data}) {

    return (
        <>
        <article className="product-item__card">
            <h2 className="card__title">{data.name}</h2>
            <span className="card__subtitle">{data.color}</span>
            <img src={data.img} alt="" className="card__img"/>
            <div className="card__info">
                <span className="card__info__price">${data.price}</span>
                <button className="info__button">Добавить в корзину</button>
            </div>
        </article>
        </>
    )
}

export default CardItem