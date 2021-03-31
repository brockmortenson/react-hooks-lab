import React, { useState } from 'react';

const AddTodo = (props) => {
    const [ userInput, setUserInput ] = useState('');

    function handleAdd(e) {
        e.preventDefault()
        props.addTodo(userInput)
        setUserInput('')
    };

    return (
        <form onSubmit={handleAdd}>
            <input 
                placeholder='What do you need to do?'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button>Submit</button>
        </form>
    );
}

export default AddTodo;