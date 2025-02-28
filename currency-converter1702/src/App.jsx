import { useEffect } from 'react';
import './App.css'

function App() {
  function handleChange() {
    alert("Click!!!");
  }

  function onMouseEnter() {
    alert("Just click!!");
  }

  function onSelect() {
    alert("New option selected");
  }

  useEffect(() => {console.log("Making API Request")}, [])

  return (
    <>
      <h1>Currency Converter</h1>
      <select name="currency" id="currencySelect" onChange={handleChange}>
        <option value="usd">USD</option>
        <option value="jpy">JPY</option>
        <option value="sgd">SGD</option>
        <option value="myr">MYR</option>
      </select>
    </>
  )
}

export default App;
