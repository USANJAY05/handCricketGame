import React, { useState } from 'react'
import './App.css'
import Main from './Main'

const App = () => {
  const [yScore,setYScore]=useState(0)
  const [mScore,setMScore]=useState(0)
  const [yPoint,setYPoint]=useState(0)
  const [mPoint,setMPoint]=useState(0)
  const [batBall,setBatBall]=useState("Batting")
  const [num,setNum]=useState(0)

  const handleInput=(val)=>{
    const value=parseInt(val)
    const randomNumber = Math.floor(Math.random() * 7);
    if(value===randomNumber){
      setNum(1)
    }
    else if(num===0){
      const score=value+yScore
      setYScore(score)
      setMPoint(randomNumber)
      setYPoint(value)
    }
    else if(num===1){
      setBatBall("Bowling")
      const score=randomNumber+mScore
      setMScore(score)
      setMPoint(randomNumber)
      setYPoint(value)
      if(num===randomNumber || value<randomNumber){
        setNum(2)
      }
    }
    else{
      if(mScore==="YOU LOSE" || mScore==="YOU WON"){
        console.log("HI")
      }
      else if(mScore>yScore){
        setMScore("YOU LOSE")
        setYScore("YOU LOSE")
      }
      else{
        setYScore("YOU WON")
        setMScore("YOU WON")
      }
    }

  }
  return (
    <section className='app'>
      <Main handleInput={handleInput} yScore={yScore} mScore={mScore} yPoint={yPoint} mPoint={mPoint} batBall={batBall} />
    </section>
  )
}

export default App