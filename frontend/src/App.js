import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'

const App = (props) => {

  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ message, setMessage] = useState(null)
  const [ error, setError] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPersonAndNumber = (event) => {
    event.preventDefault()
    if (persons.map((person) => person.name).includes(newName) && newNumber.length >= 8) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        const updatedPerson = persons.find(person => person.name === newName)
        updateNumber(updatedPerson, newNumber)
      }
      setNewName('')
      setNewNumber('')
    } else {
      const personObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage(`Added' ${newName}'`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          })
        .catch(error => {
          setError(`${error.response.data.error}`)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })  
      setNewName('')
      setNewNumber('')
      }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const filterPersons = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    if (showAll) {
      setShowAll(!showAll)
    }
  }

  const personsToShow = showAll ?
    persons :
    persons.filter(person => person.name.toLowerCase().includes(newFilter))

  const handleClick = (person) => {
    const id = person.id
    if (window.confirm(`Delete ${person.name}?`)) { 
      const deletedPerson = persons.find(n => n.id === id)
      personService
        .deletePerson(deletedPerson.id)
        .then(response => { 
          setPersons(persons.filter(n => n.id !== id))
        })
        .catch(error => {
          setMessage(null)
          setError(`${person.name} has already been removed from server`)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })
      setPersons(persons.filter(n => n.id !== id))
      setMessage(`Deleted ${deletedPerson.name}`)
      setTimeout(() => { setMessage(null) }, 5000)
    }
  }

  const updateNumber = (updatedPerson, newNumber) => {
    const person = updatedPerson
    const id = updatedPerson.id
    const changedPerson = { ...person, number: newNumber }
    personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        setMessage(`Changed the number of '${changedPerson.name}'`)
        setTimeout(() => { 
          setMessage(null) 
        }, 5000)
      })
      .catch(error => {
        setMessage(null)
        setError(
          `${changedPerson.name} has already been removed from server`)
        setTimeout(() => {
          setError(null)
        }, 5000)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Error message={error} />
      <Filter newFilter={newFilter} filterPersons={filterPersons}/>
      <h2>Add a new person</h2>
      <p>muutos 3</p>
      <PersonForm 
        addPersonAndNumber={addPersonAndNumber}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleClick={handleClick}/>
    </div>
  )
}

export default App 