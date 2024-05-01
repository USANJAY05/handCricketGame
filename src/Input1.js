import React from 'react'

const input1 = ({handleNum}) => {
  return (
    <>
        <button onClick={(e)=>handleNum(e.target.innerText)}>1</button>
        <button onClick={(e)=>handleNum(e.target.innerText)}>2</button>
        <button onClick={(e)=>handleNum(e.target.innerText)}>3</button>
        <button onClick={(e)=>handleNum(e.target.innerText)}>4</button>
        <button onClick={(e)=>handleNum(e.target.innerText)}>5</button>
        <button onClick={(e)=>handleNum(e.target.innerText)}>6</button>
        <button onClick={(e)=>handleNum(e.target.innerText)}>0</button>
    </>
  )
}

export default input1