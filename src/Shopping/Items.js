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


                    if(oldCartItems.length > 0){
                        let matched = false;
                        oldCartItems.map((val, index)  => {
                            if(val.sku === item.sku){
                                console.log("inside matched")
                                matched = true;
                                oldCartItems[index] = {...item, quantity : val.quantity+ 1};
                            }
                        })
                        if(!matched){
                            console.log("iside not matched")
                            oldCartItems.push({...item, quantity : 1})
                        }
                    }else{
                        console.log("iside outer else")
                        oldCartItems.push({...item, quantity : 1})
                    }

                    // oldCartItems && oldCartItems.length > 0 ? oldCartItems.map((val, index)  => {
                    //     if(val.sku === item.sku){
                    //         console.log("matched")
                    //         // oldCartItems.splice(index, 0, {...item, quantity : val.quantity+ 1 })
                    //         oldCartItems[index] = {...val, quantity : val.quantity+ 1};
                    //     }
                    // }) : oldCartItems.push({...val, quantity : 1})

                    console.log({oldCartItems})
                    
                    
                    setCartItems(oldCartItems)
                }}> Add to Cart</button></ul>
            })}
        </div>
    )
}

export default Items;