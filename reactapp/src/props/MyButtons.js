import React from 'react'

function OneButton(props) {
    function showMessage() {
        alert(props.message)
    }
    return (
        <button onClick={showMessage}>{props.title}</button>
    )
}

export default function MyButtons(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <OneButton title="First Button" message="Nothing works until you work!!" />
            <p></p>
            <OneButton title="Second Button" message="Life begins after college ends!" />
        </>

    )
}
