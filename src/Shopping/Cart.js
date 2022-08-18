import React from 'react';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {cartState} from '../Recoil/atoms';


const Cart = () => {

     const [cartItems, setCartItems] = useRecoilState(cartState);

     console.log("CartItems in cart page---", cartItems)

    return(
        <div>
            <strong>Cart</strong>
            {cartItems && cartItems.length > 0 && cartItems.map((item, key) => {
                return <ul key={key}>{item.name} * {item.count || 1} = {item.count || 1* item.price} </ul>
            })}
            
        </div>
    )
}

export default Cart;