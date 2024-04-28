import React, { useState } from 'react'
import './App.css'
import Main from './Main'

const App = () => {
  const [yScore,setYScore]=useState(0)
  const [mScore,setMScore]=useState(0)
  const [yPoint,setYPoint]=useState()
  const [mPoint,setMPoint]=useState()
  const [batBall,setBatBall]=useState("Hand Cricket")

  const handleInput=(val)=>{
    const value=parseInt(val)
    const randomNumber = Math.floor(Math.random() * 7);
    console.log(randomNumber);
    const score=value+parseInt(yScore)
    setYScore(score)
    setMPoint(randomNumber)
    setYPoint(value)
    console.log(value)
  }
  return (
    <section className='app'>
      <Main handleInput={handleInput} yScore={yScore} mScore={mScore} yPoint={yPoint} mPoint={mPoint} batBall={batBall} />
    </section>
  )
}

export default App