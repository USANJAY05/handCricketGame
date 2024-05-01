import React from 'react'
import ScoreBox from './ScoreBox'
import Input from './Input'
import Input1 from './Input1'

import OddOrEven from './OddOrEven'

const Main = ({handleInput,yPoint,mPoint,mScore,yScore,batBall,handleOddEven,odEven,handleNum,inputNum,input}) => {
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
                <section className="oddOrEven" style={{display:odEven}}>
                    <OddOrEven handleOddEven={handleOddEven} />
                </section>
                <section className="input" style={{display:input}}>
                    <Input handleInput={handleInput} />
                </section>
                <section className="input" style={{display:inputNum}}>
                    <Input1 handleNum={handleNum} />
                </section>
            </section>
        </section>
    </main>
  )
}

export default Main