import React, { useState } from 'react'

const YesNo = () => {
const [xOrY, setXOrY] = useState('');

const handleYesNoClick = () => {
    const randomYesNo = Math.floor(Math.random() * 2 - 1 + 1);
    setXOrY(randomYesNo);
}

return (
    <div>
        <h2>Two choices randomizer</h2>
        <div>{xOrY}</div>
        <button onClick={handleYesNoClick}>Generate!</button>
    </div>
)
}

export default YesNo;