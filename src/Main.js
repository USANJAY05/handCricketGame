import React from 'react'

const Main = ({handleInput,yPoint,mPoint,mScore,yScore,batBall}) => {
  return (
    <main className='main'>
        <section className="container">
            <section className="output-box">
                <section className="score-box">
                    <section className="score-box-left">
                        <h2>Score</h2>
                    </section>
                    <section className="score-box-right">
                        <input type="phone" value={yScore} />
                        <input type="phone" value={mScore}  />
                    </section>
                </section>
                <section className="point-box">
                    <div>{yPoint}</div>
                    <span>Vs</span>
                    <div>{mPoint}</div>
                </section>
            </section>
            <section className="display-box">
                <h2>{batBall}</h2>
            </section>
            <section className="input-box">
                <button onClick={(e)=>handleInput(e.target.innerText)}>1</button>
                <button onClick={(e)=>handleInput(e.target.innerText)}>2</button>
                <button onClick={(e)=>handleInput(e.target.innerText)}>3</button>
                <button onClick={(e)=>handleInput(e.target.innerText)}>4</button>
                <button onClick={(e)=>handleInput(e.target.innerText)}>5</button>
                <button onClick={(e)=>handleInput(e.target.innerText)}>6</button>
                <button onClick={(e)=>handleInput(e.target.innerText)}>0</button>
            </section>
        </section>
    </main>
  )
}

export default Main