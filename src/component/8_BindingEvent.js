import React, { Component } from 'react'

class BindingEvent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        // for approach 3 binding in constructor
        // this.onClickButton= this.onClickButton.bind(this)
    }

    // onClickButton() {
    //     this.setState({
    //         message: "GoodBye !!"
    //     })
    //     console.log(this)
    // }

    onClickButton = () => {
        this.setState({
            message: "Good Bye From Approach 4"
        })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {// 1 Approach using bind keyword
                /* <button onClick={this.onClickButton.bind(this)}>'Click Me</button>  */} 
                {/* // 2 Aproach using arrow functions
                <button onClick={() => this.onClickButton()}>'Click Me'</button> */}
                {/* // 3 & 4 approach */}
                <button onClick={this.onClickButton}>'Click Me'</button>
            </div>
        )
    }
}

export default BindingEvent
