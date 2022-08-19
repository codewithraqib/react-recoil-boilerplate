import React from 'react';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import {itemsState,cartState} from '../Recoil/atoms';

const Items = () => {
     const [items, setItems] = useRecoilState(itemsState);
     const [cartItems, setCartItems] = useRecoilState(cartState);
    return(
        <div>
            <strong>Inventory</strong>
            {items.map((item, key) => {
                return <ul key={key}>{item.name} @ {item.price} <button onClick={() => {
                    const oldCartItems = [...cartItems];
                    oldCartItems.push(item)
                    
                    setCartItems(oldCartItems)
                }}> Add to Cart</button></ul>
            })}
        </div>
    )
}

export default Items;