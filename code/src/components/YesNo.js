import React, { useState, useEffect } from 'react'

const YesNo = () => {
const [xOrY, setXOrY] = useState(null);

const handleYesNoClick = () => {
    const randomYesNo = Math.floor(Math.random() * 2) + 1;
    setXOrY(randomYesNo);
}
console.log(xOrY)

useEffect(() => {
    const body = document.querySelector('body');
    if (xOrY === 1) {
        body.classList.add('gradient-background-1');
        body.classList.remove('gradient-background-2');
    } else if (xOrY === 2) {
        body.classList.add('gradient-background-2');
        body.classList.remove('gradient-background-1');
    } else {
        body.classList.remove('gradient-background-2');
        body.classList.remove('gradient-background-1');
    }
})

return (
    <div className="two-choices-wrapper">
        <h2>Two choices randomizer</h2>
        {xOrY ? 
        <div className={xOrY === 1 ? 'yes-container' : 'no-container'}>{xOrY}</div> : null}
        <div>
            <button 
            onClick={() => {handleYesNoClick() }}>
                    Generate!
                    </button>
                    </div>
    </div>
)
}

export default YesNo;