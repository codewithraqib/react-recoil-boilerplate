import React from 'react';

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { totalState} from '../Recoil/atoms';



const Totals = () => {
    const totals = useRecoilValue(totalState);

    console.log("totals in total---", totals)


    return(
        <div>
            <strong>Totals</strong>
            <div style={{marginTop: 20}}/>
            <div>
                Sub Total: <span>{totals.subTotal}</span>
            </div>
             <div>
                Shipping Charges: <span>{totals.shipping}</span>
            </div>
             <div>
               <strong>Grand Total: <span>{totals.total}</span></strong>
            </div>
            
        </div>
    )
}

export default Totals;