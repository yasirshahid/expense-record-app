import React, { useState, useContext } from 'react';
import {GlobalContext} from '../Context/GlobalState';

const AddTransaction = () =>{
    const [description,setDescription]=useState('');
    const [transactionAmount,setTransactionAmount]=useState('');

    const {addTransaction}= useContext(GlobalContext);

    const onSubmit=(e)=>{
        e.preventDefault();

        const newTransaction={
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
    }

    return(
        <div>
            <h3> Add New Transaction </h3>
            <form onSubmit={onSubmit}>
                <div className="from-control">
                    <lable htmlFor="description">
                        Description
                    </lable>
                    <input type="text" 
                           id="description"
                           placeholder="Details of transaction"
                           value={description}
                           onChange={(e)=>setDescription(e.target.value)}
                           required="required"
                    />
                    <lable htmlFor="transactionamount">
                        Transaction Amount
                    </lable>
                    <input type="number" 
                           id="transactionamount"
                           placeholder="Enter Transaction Amount"
                           Value={transactionAmount}
                           onChange={(e)=>setTransactionAmount(e.target.value)}
                           required="required"

                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>

    )
}
export default AddTransaction;
