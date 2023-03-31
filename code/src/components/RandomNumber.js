import React, { useState } from "react";


export const RandomNumber = () => {
const [chosenNumber, setChosenNumber] = useState(1)
const [randomNumber, setRandomNumber] = useState(0)

const generateNumber = () => {
    const random = Math.floor(Math.random() * chosenNumber)
    setRandomNumber(random);
}

const handleNumber = (event) => {
        setChosenNumber(event.target.value)
    }

return (
    <div>
        <input
        name="range"
        type="range"
        min="1"
        max="10"
        onChange={handleNumber}
        value={chosenNumber} />
        <p>{chosenNumber}</p>
        <button onClick={generateNumber}>Click me</button>
        {randomNumber ? <p>{randomNumber}</p> : null}
    </div>
)
}

