import React from 'react'
import Person from './Person'

const Persons = ({ personsToShow, handleClick }) => {
  return (
    <div>
        <ul>
        {personsToShow.map((person) => 
            <Person key={person.id} person={person} handleClick={handleClick}/>
        )}
        </ul>
    </div>
  )
}

export default Persons



