import React from "react";

// function Greet(){
//     return <h1>Hello HIMANK</h1>
// }



// named export 
export const Greet = props => {
    const {name, children} = props
    return (
        <div>
            <h1>Hello {name}</h1>
            <p1>
                {children}
            </p1>
        </div>
    )
}


export default Greet 
