import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, TargetTime }) {
  const [TimeStarted, setTimeStarted] = useState(false);
  const [TimeExpired, setTimeExpired] = useState(false);
  const timer = useRef();
  const dialogRef = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialogRef.current.showModal();
    }, TargetTime * 1000);
    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
       {TimeExpired && <ResultModal ref={dialogRef} targetTime={TargetTime} result={"lost"} />}
      <section className="challenge">
        <h2>{title}</h2>
        {/* {TimeExpired && <p>Time's up, You Lose!</p>} */}
        <p className="challenge-time">
          {TargetTime} second{TargetTime !== 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={TimeStarted ? handleStop : handleStart}>
            {TimeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={TimeStarted ? "active" : undefined}>
          {TimeStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
