import React, { useState } from 'react';

const AddTransaction = () =>{
    const [description,setDescription]=useState();
    const [transactionamount,setTransactionAmount]=useState();

    return(
        <div>
            <h3> Add New Transaction </h3>
            <form>
                <div className="from-control">
                    <lable htmlFor="description">
                        Description
                    </lable>
                    <input type="text" required
                           id="description"
                           placeholder="Details of transaction"
                           value={description}
                           onChange={(e)=>setDescription(e.target.value)}
                    />
                    <lable htmlFor="transactionamount">
                        Transaction Amount
                    </lable>
                    <input type="number" required
                           id="transactionamount"
                           placeholder="Enter Transaction Amount"
                           Value={transactionamount}
                           onChange={(e)=>setTransactionAmount(e.target.value)}                 
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>

    )
}
export default AddTransaction;
