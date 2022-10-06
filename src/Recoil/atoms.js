import {
  atom,
  selector,
} from 'recoil';



export const itemsState = atom({
    key : "itemsState",
    default: [
    {name : "Tea", price: 60, sku: 0,},
    {name : "Coffee", price: 80, sku: 1},
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
            subTotal   = subTotal + (val.price* val.quantity || 1);
        })

        shipping  = get(shippingState).filter(val => val.selected);

        return{
            subTotal,
            shipping: shipping && shipping.length > 0 && shipping[0].price,
            total : shipping && shipping.length > 0 ?  shipping[0].price  +  subTotal  : 0 + subTotal 
        }
    }
})
export const sahuletState = atom ({
    key :"sahuletState",
    default: [
       
        {img:"../img/logo1.jpg", goto:'grievance',title:"Grievance" },
        {img :"../img/logo1.jpg", goto:'gallery',title: "Gallery"},
        {img :"../img/logo1.jpg", goto:'contacts',title: "Contacts"},
        {img :"../img/logo1.jpg", goto:'womenhelp',title: "Women Help" },
        {img :"../img/logo1.jpg", goto:'website',title: "Website" },
    ]
})

export const galleryState = atom ({
    key :"galleryState",
    default: [
        {src :'../img/leptop.avif' , width: 1080, height: 780 },
        {src:"../img/ledtv.avif", width: 800, height: 780},
        {src :"../img/gaming.avif", width: 1080, height: 1000 },
        {src :"../img/system.avif" ,width: 680, height: 780},
        {src :"../img/leptop.avif" ,width: 720, height: 860},
        {src :"../img/gaming.avif", width: 1080, height: 1000 },
        {src :"../img/system.avif" ,width: 680, height: 780},
        {src :"../img/leptop.avif" ,width: 720, height: 860},
    ]
})
export const currentGrievanceState = atom ({
    key :"currentGrievanceState",
    default: [
    ]
})
export const grievanceDetailState = atom ({
    key:"grievanceDetailState",
    default:null
})