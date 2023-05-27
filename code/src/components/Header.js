import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledH1 = styled.h1`
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding-top: 2rem;
`

const StyledP = styled.p`
  font-size: 12px;
  margin: 5px;
`

const StyledSmallP = styled.p`
  font-weight: 700;
  font-size: 10px;
`
const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 14px;
  margin: 0;
  padding-top: 1rem;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>Vios random randomizer</StyledH1>
      <StyledSmallP>For when choices need to be made.</StyledSmallP>
      <StyledH2>Tap the circle to generate your choice! </StyledH2>
      <StyledP>1 for no. 2 for yes.</StyledP>
    </StyledHeader>
  )
}

export default Header
