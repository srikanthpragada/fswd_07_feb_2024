import React from 'react'

export default function Greet() {
    // code 
    var message = "Good Evening"
    var hours = new Date().getHours()
    if (hours < 12) 
        message = "Good Morning"
    else
        if (hours < 17)
             message = "Good Afternoon"

    return (
        <h1 className="text-primary">{message}</h1>
    )
}
