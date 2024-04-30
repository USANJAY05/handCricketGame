import React from 'react'

const Input = ({handleInput}) => {
  return (
    <>
        <button onClick={(e)=>handleInput(e.target.innerText)}>1</button>
        <button onClick={(e)=>handleInput(e.target.innerText)}>2</button>
        <button onClick={(e)=>handleInput(e.target.innerText)}>3</button>
        <button onClick={(e)=>handleInput(e.target.innerText)}>4</button>
        <button onClick={(e)=>handleInput(e.target.innerText)}>5</button>
        <button onClick={(e)=>handleInput(e.target.innerText)}>6</button>
        <button onClick={(e)=>handleInput(e.target.innerText)}>0</button>
    </>
  )
}

export default Input