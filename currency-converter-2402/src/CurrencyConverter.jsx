import CurrencyConverter from "../CurrencyConverter";
import "./CurrencyStyling.css"
import { useEffect, useState } from "react";
import React from 'react';

function CurrencyConverter() {
    return (
        <div className="container">
            <input
                value={""}
                placeholder="Enter amount"
                className="converter-input"
                onChange={() => { }}
            />
            <p>EUR</p>
            <p>=</p>
            <p className="converted-amount">2</p>
            <p>USD</p>
        </div>
    )
}

export default CurrencyConverter();