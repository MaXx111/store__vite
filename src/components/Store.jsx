import { useState } from 'react'
import '../App.css'
import products from '../assets/products.js'

import CardsView from './cards-view'
import ListView from './list-view'
import IconSwitch from './icon-switch'

 

function Store() {
    const array = products;
    const [state, setState] = useState('view_module')

    const handler = () => {
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

