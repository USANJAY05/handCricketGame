import React from 'react'

const OddOrEven = ({handleOddEven}) => {
  return (
    <>
        <button onClick={(e)=>handleOddEven(e.target.innerText)} className='oddOrEven'>Odd</button>
        <button onClick={(e)=>handleOddEven(e.target.innerText)} className='oddOrEven'>Even</button>
    </>
  )
}

export default OddOrEven