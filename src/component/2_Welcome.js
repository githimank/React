import React, { Component } from "react";

class Welcome extends Component {
    render() {
        const {name, superName, children} = this.props
        return (
            <div>
                <h1>Welcome {name} a.k.a {superName}</h1>
                <p1>{children}</p1>
            </div>
        )
    }
}

export default Welcome