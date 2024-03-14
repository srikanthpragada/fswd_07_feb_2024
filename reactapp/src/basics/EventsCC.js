import React, { Component } from 'react'

export default class EventsCC extends Component {
    constructor() {
        super()
        this.title = "Srikanth Technologies"
        
        // Bind this so that it is available in handleEvent 
        this.handleEvent = this.handleEvent.bind(this)
    }
    handleEvent() {
        alert(this.title)
    }

    render() {
        return (
            <button onClick={this.handleEvent}>Button</button>
        )
    }
}
