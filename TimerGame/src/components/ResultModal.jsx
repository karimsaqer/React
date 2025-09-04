import { forwardRef } from "react";

const ResultModal = forwardRef (function ResultModal({ result, targetTime}, ref) {
  return (
    <dialog ref={ref} className="result-modal" open>
        <h2>You {result} </h2>
        <p>Target time was {targetTime} second{targetTime !== 1 ? "s" : ""}</p>
        <p>You stopped the timer <strong>X seconds left</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
  );
});

export default ResultModal;