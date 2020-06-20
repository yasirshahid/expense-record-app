import React from 'react';
import './App.css';
//Imports Components

import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTranscation';
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
      
    </GlobalProvider>
  );
}

export default App;
