import React from 'react';
import './App.css';
//Imports Components

import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary';
import TransactionHistory from './components/TranscationHistory';
import AddTransaction from './components/AddTranscation';
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory/>
        <AddTransaction/>
      </div>
      
    </div>
  );
}

export default App;
