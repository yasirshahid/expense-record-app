import React from 'react';

const AddTransaction = () =>{
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
                    />
                    <lable htmlFor="transactionamount">
                        Transaction Amount
                    </lable>
                    <input type="number" required
                           id="transactionamount"
                           placeholder="Enter Transaction Amount"                   
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>

    )
}
export default AddTransaction;
