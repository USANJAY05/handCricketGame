import React from 'react'

const ScoreBox = ({yPoint,mPoint,mScore,yScore}) => {
  return (
    <>
        <section className="score-box">
        <section className="score-box-left">
            <h2>Score</h2>
        </section>
        <section className="score-box-right">
            <input readOnly type="phone" value={yScore} />
            <input readOnly type="phone" value={mScore}  />
        </section>
    </section>
    <section className="point-box">
        <div>{yPoint}</div>
        <span>Vs</span>
        <div>{mPoint}</div>
    </section>
    </>
  )
}

export default ScoreBox