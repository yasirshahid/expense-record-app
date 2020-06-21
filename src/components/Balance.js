import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Balance=()=>{
    const {transactions}=useContext(GlobalContext);
    const transactionAmounts=transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    
    return(
        <div>
        <h4 className="h1">Current Balance</h4>
        <h1 className="h1" id="balance">${balance}</h1>
        </div>

    )
}
export default Balance;