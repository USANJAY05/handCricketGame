import React from 'react'
import ScoreBox from './ScoreBox'
import Input from './Input'
import OddOrEven from './OddOrEven'

const Main = ({handleInput,yPoint,mPoint,mScore,yScore,batBall,handleOddEven}) => {
  return (
    <main className='main'>
        <section className="container">
            <section className="output-box">
                <ScoreBox yPoint={yPoint} mPoint={mPoint} mScore={mScore} yScore={yScore} />
            </section>
            <section className="display-box">
                <h2>{batBall}</h2>
            </section>
            <section className="input-box">
                {/* <OddOrEven handleOddEven={handleOddEven} /> */}
                <Input handleInput={handleInput} />
            </section>
        </section>
    </main>
  )
}

export default Main