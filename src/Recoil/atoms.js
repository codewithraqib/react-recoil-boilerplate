import {
  atom,
  selector,
} from 'recoil';



export const itemsState = atom({
    key : "itemsState",
    default: [
    {name : "Tea", price: 60},
    {name : "Coffee", price: 80},
]
})

export const cartState = atom({
    key : "cartState",
    default: []
})


export const shippingState = atom ({
    key :"shippingState",
    default: [
        {name: "1 day Delivery", price : 500, selected: false},
        {name: "3 day Delivery", price : 200, selected: false},
        {name: "7 day Delivery", price : 100, selected: false},
    ]
})


export const totalState = selector({
    key :"totalsState",
    get : ({get}) => {

        const productsTotal = get(cartState)
        // const shippingTotal = get(shippingState);

        let subTotal = 0;
        let shipping = 0;
        productsTotal && productsTotal.length > 0 && productsTotal.map(val => {
            subTotal   = subTotal + val.price;
        })

        shipping  = get(shippingState).filter(val => val.selected);

        return{
            subTotal : subTotal,
            shipping: shipping && shipping.length > 0 && shipping[0].price,
            total : shipping && shipping.length > 0 ?  shipping[0].price  +  subTotal  : 0 + subTotal 
        }
    }
})

