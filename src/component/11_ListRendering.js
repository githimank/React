import React from 'react'

function ListRendering() {

    const names = ['himank', 'Tarun', 'Vishwas']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return <div>{nameList}</div>



    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )

    // Using index as key 
    // When to Use 1. List do not have a unique id 2. list is static & will not change 3. List will never reordered or filtered
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default ListRendering
