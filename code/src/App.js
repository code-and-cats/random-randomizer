import React, { useState } from 'react'
import { RandomNumber } from './components/RandomNumber'
import Header from './components/Header'
import { Background } from './components/Background'
import TwoChoices from './components/TwoChoices'
import GlobalStyles from './components/GlobalStyle'

const App = () => {
  const [xOrY, setXOrY] = useState(null)
  const [loading, setLoading] = useState(false)
  console.log(xOrY)

  const handleRandomGenerator = () => {
    setLoading(true)
    //setTimeout to show the loading for 2 seconds
    setTimeout(() => {
      //the random generation happens here
      const randomGenerator = Math.floor(Math.random() * 2) + 1
      setXOrY(randomGenerator)
      //removing loading again
      setLoading(false)
    }, 1500)
  }

  return (
    <>
      <GlobalStyles />
      <Background x={xOrY === 1} y={xOrY === 2} loading={loading}>
        <Header />
        <TwoChoices
          onXOrYChange={setXOrY}
          loading={loading}
          onRandomGenerator={handleRandomGenerator}
          xOrY={xOrY}
        />
        <RandomNumber />
      </Background>
    </>
  )
}
export default App
