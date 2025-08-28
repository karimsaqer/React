import { useState } from 'react';
export default function Player({ name, symbol, isActive, onChangeName }) {
    const [Name, setName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);


    const handleEditClick = () => {
        setIsEditing((isEditing) => !isEditing);
        if (isEditing) {
            onChangeName(symbol, Name);
        }
    };

    const handleName = (event) => {
        console.log(event);
        setName(event.target.value);
    }
    let inputPlayerName = <span className="player-name">{Name}</span>;
    if (isEditing) {
        inputPlayerName = <input type="text" value={Name} onChange={handleName} />;
    }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {inputPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}