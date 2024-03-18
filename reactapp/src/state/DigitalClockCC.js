import { Component } from 'react';

export default class DigitalClock extends Component {
 
    constructor(){
        super();
        this.state = {clock : ''}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({ clock: new Date().toLocaleTimeString() }),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <>
             <h2>Digital Clock</h2>
             <h1>{this.state.clock}</h1>
             </>

        )
    }
}