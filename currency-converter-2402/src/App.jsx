import './App.css'
import CurrencyDropdown from './CurrencyDropdown';
import CurrencyConverter from './CurrencyConverter';
import React from React;

function App() {

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyDropdown />
      <CurrencyConverter />
    </>
  )
}

export default App;
