import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Score from './components/Score'
import Timer from './components/Timer'

function App() {

  // Add State for Score
  const [score, setScore] = useState(0);

  // Increments score
  const updateScore = () => {
    setScore(score + 1)
  }

  // State for Timer
  const [timer, setTimer] = useState({
    time: 10000,
    seconds: 10,
    mSeconds: '000',
    interval: 100,
  })

  // Update time with interval
  const updateTimer = () => {

    const start = setInterval(() => {
      let time = timer.time;
      time += parseInt((timer.interval).toFixed(1));

      let secs = Math.floor(parseInt(time.toString().split('.')[0]) / 1000);

      let mSecs = parseInt((time / 1000).toString().split('.')[1]) * 100;

      mSecs ? mSecs = mSecs : mSecs = "000";

      setTimer({ ...timer, time: timer.time -= timer.interval, seconds: secs, mSeconds: mSecs })

      if (time === 0) {
        clearInterval(start);
      }

    }, timer.interval)

  }

  // Button click handler - starts timer and updates score
  let handlerOne = () => {
    updateScore(score);
    updateTimer();
  };

  // Button click handler - when timer is 0, resets timer and score
  let handlerTwo = () => {
    setTimer({
      time: 10000,
      seconds: 10,
      mSeconds: '000',
      interval: 100,
    })
    setScore(0);
  }


  return (
    <div className="container">
      <Header />
      <Score score={score} />
      <Timer timer={timer} />
      <Button score={score} handlerOne={handlerOne} handlerTwo={handlerTwo} timer={timer} /> {/* Pass down Score state and its update function as props to Button, so Button can update Score's state when clicked */}
    </div>
  );
}

export default App;
