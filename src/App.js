import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import AddForm from './AddForm';
import Phonebook from './Phonebook';

const App = () => {
    const [ persons, setPersons ] = useState([]);
    const [ newName, setName ] = useState('');
    const [ newNumber, setNumber ] = useState(null);
    const [ searchedContact, setSearched ] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => setPersons(response.data))
    }, [])

    const addPerson = (event) => {
        event.preventDefault();
        const newContact = persons.concat({ name: newName, number: newNumber })
        const result = persons.filter(person => person.name === newName)
        result.length > 0 
        ?
            alert(`${newName} already exists in your phonebook`)
        :
            setPersons(newContact);
    }

    const searchContact = (event) => {
        setSearched(event.target.value);
    }

    const saveName = (event) => {
        setName(event.target.value);
    }

    const saveNumber = (event) => {
        setNumber(event.target.value);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <SearchBar handleChange={searchContact} persons={persons} searchedContact={searchedContact} />
            <h2>Add a new contact</h2>
            <AddForm handleSubmit={addPerson} saveName={saveName} saveNumber={saveNumber} />
            <h2>Numbers</h2>
            <Phonebook persons={persons} />
        </div>
    )
}

export default App;
