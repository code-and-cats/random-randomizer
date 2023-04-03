import React, { useState } from 'react'

const YesNo = () => {
const [xOrY, setXOrY] = useState(null);

const handleYesNoClick = () => {
    const randomYesNo = Math.floor(Math.random() * 2) + 1;
    setXOrY(randomYesNo);
}
console.log(xOrY)

const handleDiv = () => {
    setTimeout(() => {
    }, 2000);
}

return (
    <div className="two-choices-wrapper">
        <h2>Two choices randomizer</h2>
        {xOrY ? 
        <div className={xOrY === 1 ? 'yes-container' : 'no-container'}>{xOrY}</div> : null}
        <div>
            <button 
            onClick={() => {
                handleDiv()
                handleYesNoClick()               
                }}>
                    Generate!
                    </button>
                    </div>
    </div>
)
}

export default YesNo;