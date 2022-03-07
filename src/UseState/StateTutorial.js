import React, { useState } from "react";

const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("Pedro");

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1)
    };

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            {counter}
            <button onClick={increment}>+</button>
            <br/>
            <input placeholder="Enter something here ..." onChange={onChange}/>
            {inputValue}
        </div>
    ) 

    
}

export default StateTutorial;
