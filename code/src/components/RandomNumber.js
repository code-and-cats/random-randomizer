import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'

const StyledH3 = styled.h3`
  font-weight: 700;
  font-size: 20px;
  margin: 0;
`
const MoreChoicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 12px;
  background-color: rgba(221, 217, 219, 0.4);
  border: none;
  font-weight: 600;

  &:hover {
    background-color: rgba(221, 217, 219, 0.8);
  }
`
const MaxP = styled.p`
  font-weight: 700;
  font-size: 10px;
  margin-top: 1rem;
`

export const RandomNumber = () => {
  const [chosenNumber, setChosenNumber] = useState(1)
  const [randomNumber, setRandomNumber] = useState(0)

  const generateNumber = () => {
    const random = Math.floor(Math.random() * chosenNumber) + 1
    setRandomNumber(random)
  }

  const handleNumber = (event) => {
    setChosenNumber(event.target.value)
  }

  return (
    <MoreChoicesWrapper>
      <StyledH3>Random numbers</StyledH3>
      {randomNumber ? <p>Your number: {randomNumber}</p> : <p>Your number: </p>}
      <Input
        name="range"
        type="range"
        min="1"
        max="10"
        onChange={handleNumber}
        value={chosenNumber}
      />
      <MaxP>Max: {chosenNumber}</MaxP>
      <StyledButton onClick={generateNumber}>Generate!</StyledButton>
    </MoreChoicesWrapper>
  )
}
