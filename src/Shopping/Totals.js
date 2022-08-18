import React from 'react';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { shippingState} from '../Recoil/atoms';


const Totals = () => {
    const [shippingMethods, setShippigMethod] = useRecoilState(shippingState);

    console.log("Shipping methods in total---", shippingMethods)


    return(
        <div>
            <strong>Totals</strong>
            
        </div>
    )
}

export default Totals;