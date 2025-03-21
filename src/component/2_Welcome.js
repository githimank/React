import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Welcome {this.props.name} a.k.a {this.props.superName}</h1>
                <p1>{this.props.children}</p1>
            </div>
        )
    }
}

export default Welcome