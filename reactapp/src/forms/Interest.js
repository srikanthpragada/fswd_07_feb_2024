import React, { useState } from 'react'

export default function Interest() {
    let [amount, setAmount] = useState(0)
    let [rate, setRate] = useState(10)
    let [interest, setInterest] = useState(0)

    function updateAmount(e) {
        setAmount(e.target.value)
    }
    function updateRate(e) {
        setRate(e.target.value)
    }

    function calculate(e) {
        e.preventDefault()    // prevent refreshing form
        setInterest(amount * rate / 100)
    }

    return (
        <>
            <h1>Interest Calculation</h1>
            <form onSubmit={calculate}>
                Amount <br />
                <input type="number" value={amount} onChange={updateAmount} required />
                <p></p>
                Interest Rate <br />
                <input type="number" step="0.01" value={rate} onChange={updateRate} required />
                <p></p>
                <button>Calculate</button>
                <p></p>

                {   //Conditional Rendering  
                    interest > 0 && <h2> Interest  = {interest} </h2>
                }
            </form>
        </>
    )
}
