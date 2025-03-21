import React from "react";

// with jsx 
const Hello = () => {
    // return (
    //     <div className="Tarun" id="12">
    //     <h1> Hello Tarun</h1>
    // </div>
    // )

    // without
    return React.createElement(
        'div', { id: 'hello', className: "dummyClass", }, React.createElement('h3', null, 'Hello Tarun')
    )

}



export default Hello