import { useState } from 'react'
import '../App.css'
import products from '../assets/products.js'


function Store() {
    const array = products;
    const [state, setState] = useState('view_module')

    const handler = (e) => {
        if(state == 'view_module') setState('view_list');

        if(state == 'view_list') setState('view_module')
    }
    const res = () => {
        if(state == 'view_module') return <CardsView products={products}/>

        if(state == 'view_list') return <ListView products={products}/>
    }

  return (
    <>
        <div className="wrapper">
            <IconSwitch icon={state} onSwitch={handler}/>
            <div className="products">
                {res()}
            </div>
        </div>
    </>
  )
}

export default Store

function IconSwitch({icon, onSwitch}) {

    return (
        <>
        <button onClick={onSwitch} className="material-icons icon">{icon}</button>
        </>
    )
}

function CardsView({products}) {

    const res = products.map(function(item) {
        return (
            <>
                <ShopCard data={item} />
            </>
        )
    })

    return (
        <>
            {res}
        </>
    )
}

function ShopCard({data}) {

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

function ListView({products}) {
    const res = products.map(function(item) {
        return (
            <>
                <ShopItem data={item} />
            </>
        )
    })

    return (
        <>
            {res}
        </>
    )
}

function ShopItem({data}) {

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