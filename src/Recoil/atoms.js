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

