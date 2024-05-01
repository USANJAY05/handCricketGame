import React from 'react'

const OddOrEven = ({handleOddEven}) => {
  return (
    <>
        <button onClick={(e)=>handleOddEven(e.target.value)} value={0} className='oddOrEven'>Odd</button>
        <button onClick={(e)=>handleOddEven(e.target.value)} value={1} className='oddOrEven'>Even</button>
    </>
  )
}

export default OddOrEven