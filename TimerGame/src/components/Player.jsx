import { useState, useRef } from "react";
export default function Player() {
  const inputName = useRef();
  const [PlayerName, setPlayerName] = useState(null);

  function handleSubmit() {
    const value = inputName.current.value.trim();
    setPlayerName(value || null);
    inputName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {PlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={inputName} type="text" onBlur={handleSubmit} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
