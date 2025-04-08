import React from 'react'
import Person from './11.2_Person'

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
