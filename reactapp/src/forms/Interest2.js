import React, { useState } from 'react'

export default function Interest2() {

    let [data, setData] = useState({ amount: 0, rate: 10, interest: 0 })

    function updateState(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function calculate(e) {
        e.preventDefault()    // prevent refreshing form
        setData({ ...data, interest: data.amount * data.rate / 100 })
    }

    return (
        <>
            <h1>Interest2 Calculation</h1>
            <form onSubmit={calculate}>
                Amount <br />
                <input type="number" name="amount" value={data.amount} onChange={updateState} required />
                <p></p>
                Interest Rate <br />
                <input type="number" name="rate" step="0.01" value={data.rate} onChange={updateState} required />
                <p></p>
                <button>Calculate</button>
                <p></p>

                {   //Conditional Rendering  
                    data.interest > 0 && <h2> Interest  = {data.interest} </h2>
                }
            </form>
        </>
    )
}
