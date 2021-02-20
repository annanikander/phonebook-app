import React from 'react'

const PersonForm = ({addPersonAndNumber, newName, handlePersonChange, newNumber, handleNumberChange}) => {
  return (
    <div>
        <form onSubmit={addPersonAndNumber}>
            <div>
            Name: <input 
                value={newName}
                onChange={handlePersonChange}
            />
            </div>
            <div>
            Number: <input
            value={newNumber}
            onChange={handleNumberChange}
            />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    </div>
  )
}

export default PersonForm



