import React from 'react'

function ListRendering() {

    const names = ['himank', 'Tarun', 'Vishwas']
    const nameList = names.map(name => <h2>{name}</h2>)
    return <div>{nameList}</div>

    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )
}

export default ListRendering
