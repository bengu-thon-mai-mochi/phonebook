import React from 'react';
import ContactInfo from './ContactInfo';

const Phonebook = ({ persons }) => {
    return(
        <ul>
        {persons.map(person =>
            <ContactInfo key={Math.random()} name={person.name} number={person.number} />
        )}
        </ul>
    )
}

export default Phonebook;