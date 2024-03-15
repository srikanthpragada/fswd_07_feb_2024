import React from 'react'

export default function NoStateCounter() {
    var counter = 0

    function increment() {
        counter++;
        console.log(counter)
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}
