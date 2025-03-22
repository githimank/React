import React, { Component } from 'react'

export class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }



    Increment() {
        // without previous value setstate recommend to use prevstate while state updating

        // this.setState(
        //     { count: this.state.count + 1 }, (() => console.log('Callback Value ', this.state.count))
        // )

        this.setState((prevstate) => ({
            count: prevstate.count + 1
        }))


        // this line will execute before set state due to Async to perform any operation after set state use setstate callback
        console.log(this.state.count)
    }

    IncrementFive() {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render() {
        return (
            <div>
                <div>Counter - {this.state.count}</div>
                <button onClick={() => { this.IncrementFive() }}>Increment</button>
            </div>

        )
    }
}

export default Counter
