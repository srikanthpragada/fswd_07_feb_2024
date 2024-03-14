import React from 'react'

export default function Events() {
    function handleEvent(e) {
        console.log("Event Handler")
        console.log(e)  // e represents event 
    }
    return (
        <>
            <button onClick={handleEvent}>First Button</button>
            <button onClick={handleEvent}>Second Button</button>
        </>
    )
}
