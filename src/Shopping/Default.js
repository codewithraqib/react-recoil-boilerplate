import React from 'react';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {itemsState} from '../Recoil/atoms';
import Items from './Items';
import Cart from './Cart';
import Totals from './Totals';

const inventory = [
    {name : "Tea", price: 60},
    {name : "Coffee", price: 80},
];


const Default = () => {
    
    // const [items, setItems] = useRecoilState(itemsState);
    // setItems(inventory)

    return(
        <div className='main-container'>
            <div className='content-wrapper'>
                <div className='items-cart-container'>
                    <Items />
                    <div className='right-side'>
                        <Cart/>
                        <Totals/>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Default;