import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
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

