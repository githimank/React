import React from 'react'
import Person from './11.2_Person'

// A “key” is a special string attribute you need to include when creating lists of elements.
// Keys give the elements a stable identity.
// Keys help React identify which items have changed, are added, or are removed.
// This results in a much more efficient update of the user interface.

function NameList() {

    const person = [
        {
            id: 1,
            name: 'Himank',
            age: 25,
            skills: 'flutter'
        },
        {
            id: 2,
            name: 'Tarun',
            age: 26,
            skills: 'NodeJS'
        },
        {
            id: 3,
            name: 'Vishwas',
            age: 26,
            skills: 'ReactJS'
        }
    ]
    const personList = person.map((person) => <Person key={person.id} person={person}></Person>)

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
