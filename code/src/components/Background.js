import styled, { css, keyframes } from 'styled-components'

const GradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
  `
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #85ffbd, #fffb7d, #e2ff7d, #3adea6);
  background-size: 400% 400%;
  animation: ${GradientAnimation} 10s ease infinite;

  ${(props) =>
    props.x &&
    css`
      background: linear-gradient(
        -45deg,
        #19cfc5,
        #18a3a0,
        #4bdaf3,
        #4b8ff3,
        #4b63f3
      );
      background-size: 400% 400%;
      animation: ${GradientAnimation} 10s ease infinite;
    `}

  ${(props) =>
    props.y &&
    css`
      background: linear-gradient(
        -45deg,
        #974bf3,
        #c94bf3,
        #b04bf3,
        #693ad6,
        #9433c2
      );
      background-size: 400% 400%;
      animation: ${GradientAnimation} 10s ease infinite;
    `}

  ${(props) =>
    props.loading &&
    css`
      background: linear-gradient(-45deg, #ffad4d, #ffd55f, #fffa83, #fff);
      background-size: 400% 400%;
      animation: ${GradientAnimation} 10s ease infinite;
    `}
`
