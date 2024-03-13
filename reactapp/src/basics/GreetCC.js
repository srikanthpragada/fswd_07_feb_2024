import React, { Component } from 'react'

export default class GreetCC extends Component {

    constructor() {
        super()
        this.message = "Good Evening"
        var hours = new Date().getHours()
        if (hours < 12)
            this.message = "Good Morning"
        else
            if (hours < 17)
                this.message = "Good Afternoon"
    }

    render() {
        return (
            <>
                <h2>Class Component Demo</h2>
                <h1>{this.message}</h1>
            </>
        )
    }
}
