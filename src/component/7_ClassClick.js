import React, { Component } from 'react'

export class ClassClick extends Component {

    ClassHandler() {
        console.log('Clicked Me');
    }

    render() {
        return (
            <div>
                <button onClick={this.ClassHandler}>Click Mee</button>
            </div>
        )
    }
}

export default ClassClick
