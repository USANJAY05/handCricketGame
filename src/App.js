import React, { useEffect, useState,useRef } from 'react'
import './App.css'
import Main from './Main'
import AlertBox from './AlertBox'
import clickSound from './click.wav'; // Import your click sound file

const App = () => {
  const audioRef = useRef(new Audio(clickSound)); // Create a ref for the Audio object
  const [c,setc]=useState(0)  
  const [yScore,setYScore]=useState(0)
  const [mScore,setMScore]=useState(0)
  const [yPoint,setYPoint]=useState(0)
  const [mPoint,setMPoint]=useState(0)
  const [batBall,setBatBall]=useState("Batting")
  let [bb,setBB]=useState(0)
  const [alert,setAlert]=useState("none")
  const [msg,setMsg]=useState()
  let [count,setCount]=useState(0)
  let [ad,setAd]=useState(0)
  const [odEvenVal,setOdEvenVal]=useState()

  let [odEven,setOdEven]=useState(1)
  const [inputNum,setInputNum]=useState("none")
  const [input,setInput]=useState("none")

  const handleReset = () => {
    window.location.reload()
  };

  const handleOddEven=(value)=>{
    audioRef.current.play();
    setBatBall("Enter a Number")
    console.log(value)
    setOdEven("none")
    setInputNum(true)
    setOdEvenVal(value)
  }
  const handleNum=(val)=>{
    audioRef.current.play();
    const value=parseInt(val)
    console.log(value)
    const randomNumber = Math.floor(Math.random() * 7);
    console.log(randomNumber+value)
    setMPoint(randomNumber)
    setYPoint(value)
    // setYScore("Total:"+total)
    // setMScore("Total:"+total)
    if((value+randomNumber)%2!==parseInt(odEvenVal)){
        setBB(0)
        setBatBall("Batting")
    }
    else{
        console.log("odd")
        setBatBall("Bowling")
        setBB(1)
    }
    setInput("flex")
    setInputNum("none")
  }
  

  const handleInput=(val)=>{
    audioRef.current.play();
    const value=parseInt(val)
    const randomNumber = Math.floor(Math.random() * 7);
    setMPoint(randomNumber)
    setYPoint(value)

    const you=()=>{
      setBatBall("Batting")
      console.log(batBall)
      const score=value+yScore
      setYScore(score)
    }
    const machine=()=>{
        setBatBall("Bowling")
      const score=randomNumber+mScore
      console.log(batBall)
      setMScore(score)
    }
    

    if(value===randomNumber && count<2){
      bb=bb===1?0:1
      setBB(bb)
      count+=1
      setCount(count)
      setAd(1)
      //console.log(bb,count)
      //console.log(count,mPoint,yPoint)
    }
    else if(bb===0){
      you()
      //console.log(bb)
    }
    else if(bb===1){
      machine()
    }
// //console.log(alert)
// //console.log(batBall)


  }

  useEffect(()=>{
    if(bb===0&&count>=1){

      setBatBall("Batting")
    }
    //console.log(ad)
    if(bb===0&&count<2){
      console.log("HI1")
      if(count===1&&yScore>mScore){
        setAlert()
        setMsg("YOU WON")
      }
    }
    else if(bb===1 && count<2){
      setBatBall("Bowling")
      console.log("HI2")
      if(count===1&&yScore<mScore){
        setAlert()
        setMsg("You Loss")
      }
    }
    else if(ad===1&&yScore>mScore){
      setAlert()
      setMsg("YOU WON")
    }
    else if(((count>=2)||(count===1))&&((yPoint>mPoint)||(yPoint<=mPoint))){
      setAlert(true)
      //console.log("hiiiiiiiiiii")
      if(mScore<yScore){
        setMsg("YOU WON")
      }
      else{
        setMsg("YOU Loss")
      }
    }
    if(c===0){
        setBatBall("Odd or Even")
        setc(1)
    }
    
  },[count, ad, yScore, mScore,bb, c, mPoint, yPoint])


  return (
    <section className='app'>
      <Main handleInput={handleInput} yScore={yScore} mScore={mScore} yPoint={yPoint} mPoint={mPoint} batBall={batBall} handleOddEven={handleOddEven} odEven={odEven} handleNum={handleNum} inputNum={inputNum} input={input} />
      <AlertBox alert={alert} msg={msg} handleReset={handleReset}/>
    </section>
  )
}

export default App
