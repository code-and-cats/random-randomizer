import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 15px solid rgba(221, 217, 219, 0.36);
  border-radius: 50%;

  ::before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
const Number = styled.p`
  color: white;
`

const TwoChoices = ({ xOrY, onXOrYChange, loading, onRandomGenerator }) => {
  return (
    <>
      {loading ? (
        <Container>Generating...</Container>
      ) : (
        <Container
          onClick={() => {
            onRandomGenerator()
          }}>
          <Number>{xOrY}</Number>
        </Container>
      )}
    </>
  )
}

export default TwoChoices
