import React from 'react'

const AlertBox = ({alert,msg,handleReset}) => {
  return (
    <section style={{display:alert}} className="alertBox">
        <div className="alert-msg-box">
            <h2>{msg}</h2>
            <button onClick={()=>handleReset()} className="alert-btn">Play Again</button>
        </div>
    </section>
  )
}

export default AlertBox