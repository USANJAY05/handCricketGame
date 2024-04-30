import React, { useState } from 'react'
import './App.css'
import Main from './Main'
import AlertBox from './AlertBox'

const App = () => {
  const [yScore,setYScore]=useState(0)
  const [mScore,setMScore]=useState(0)
  const [yPoint,setYPoint]=useState(0)
  const [mPoint,setMPoint]=useState(0)
  const [batBall,setBatBall]=useState("Batting")
  const [bb,setBB]=useState(0)
  const [num,setNum]=useState(0)
  const [alert,setAlert]=useState("none")
  const [msg,setMsg]=useState()
  let [count,setCount]=useState(0)
  let [ad,setAd]=useState(0)

  const handleReset = () => {
    window.location.reload()
  };
  
  

  const handleInput=(val)=>{
    const value=parseInt(val)
    const randomNumber = Math.floor(Math.random() * 7);
    setMPoint(randomNumber)
    setYPoint(value)

    const you=()=>{
      setBatBall("Batting")
      const score=value+yScore
      setYScore(score)
    }
    const machine=()=>{
      const score=randomNumber+mScore
      setMScore(score)
    }
    (bb===0)?setBatBall("Batting"):setBatBall("Bownling")
    
    
    console.log(count)
    if(ad===1&&yScore<mScore){
      setAlert()
      setMsg("YOU LOSS")
    }
    else if((count>1 && ((yScore>1)&&(mScore>1))) || count>2){
      setAlert(true)
      if(mScore>yScore){
        setMsg("YOU LOSS")
      }
      else{
        setMsg("YOU Won")
      }
    }
    else if(value===randomNumber && count<=2){
      setBB(!bb)
      count+=1
      setCount(count)
      setAd(1)
    }
    else if(bb===0){
      you()
    }
    else{
      machine()
    }
    // if(value===randomNumber){
    //   setNum(1)
    // }
    // else if(num===0){
    //   machine()
    // }
    // else if(num===1){
    //   you()
    //   if(num===randomNumber || value<randomNumber){
    //     setNum(2)
    //   }
    // }
    // else{
    //   if(mScore==="YOU LOSE" || mScore==="YOU WON"){
    //     console.log("HI")
    //   }
    //   else if(mScore>yScore){
    //     setAlert(true)
    //     setMsg("You Lose")
    //   }
    //   else{
    //     setAlert(true)
    //     setMsg("You won")
    //   }
    // }




  }
  return (
    <section className='app'>
      <Main handleInput={handleInput} yScore={yScore} mScore={mScore} yPoint={yPoint} mPoint={mPoint} batBall={batBall} />
      <AlertBox alert={alert} msg={msg} handleReset={handleReset}/>
    </section>
  )
}

export default App