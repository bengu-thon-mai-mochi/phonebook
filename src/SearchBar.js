import React from 'react';

const SearchBar = ({ handleChange, persons, searchedContact }) => {
    return(
        <div>
            Search: <input onChange={(e) => handleChange(e)} />
            <div>
                {
                    persons.filter(person => 
                        person.name.toLowerCase().match(`${searchedContact}`)
                    ).map(result => 
                        <p>{result.name} - {result.number}</p>
                    )
                }
            </div>
        </div>
    )
} 

export default SearchBar;
