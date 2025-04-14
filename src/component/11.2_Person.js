import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>my name is {person.name}, i am {person.age} old</h2>
        </div>
    )
}

export default Person
