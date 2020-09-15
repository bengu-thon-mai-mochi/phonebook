import React from 'react';

const AddForm = ({handleSubmit, saveName, saveNumber}) => {
    return(
        <form onSubmit={event => handleSubmit(event)}>
            <div>
                name: <input onChange={event => saveName(event)} />
                number: <input onChange={event => saveNumber(event)} />
            </div>
            <div> 
                <button type="submit">ADD</button>
            </div>
        </form>
    )
}

export default AddForm;
