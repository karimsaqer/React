import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, TargetTime }) {
  const timer = useRef();
  const dialogRef = useRef();
  const [TimeRemaining, setTimeRemaining] = useState(TargetTime * 1000);
  const TimerIsActive = TimeRemaining < TargetTime * 1000 && TimeRemaining > 0;

  if (TimeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current.open();
  }

  function resetTimer() {
    setTimeRemaining(TargetTime * 1000);
  }


  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((time) => time - 10);
    }, 10);
  }

  function handleStop() {
    dialogRef.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={TargetTime}
        remainingTime={TimeRemaining}
        onReset={resetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {TimeExpired && <p>Time's up, You Lose!</p>} */}
        <p className="challenge-time">
          {TargetTime} second{TargetTime !== 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={TimerIsActive ? handleStop : handleStart}>
            {TimerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={TimerIsActive ? "active" : undefined}>
          {TimerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
