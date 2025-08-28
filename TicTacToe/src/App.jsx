import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

// import helper functions from utils
import { deriveActivePlayer, checkWinner } from "./utils";

// initial empty 3x3 game board
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  // players object: maps symbols to names
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  // stores all turns taken (list of moves)
  const [gameTurn, setGameTurn] = useState([]);

  // determine whose turn it is based on move history
  let activePlayer = deriveActivePlayer(gameTurn);

  // build current game board state from turn history
  let gameBoard = initialGameBoard.map((row) => [...row]);
  for (const turn of gameTurn) {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  }

  // update player names when edited
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prev) => ({
      ...prev,
      [symbol]: newName,
    }));
  }

  // check if a player has won or if it's a draw
  let winner = checkWinner(gameBoard, players, WINNING_COMBINATIONS);
  const hasDraw = gameTurn.length === 9 && !winner;

  // restart the game (clear moves)
  function handleRestartGame() {
    setGameTurn([]);
  }

  // handle a player's move (square clicked)
  function handlePlayerChange(rowIndex, columnIndex) {
    setGameTurn((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      return [
        { square: { row: rowIndex, col: columnIndex }, player: currentPlayer },
        ...prevTurns,
      ];
    });
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          {/* players with active highlight */}
          <ol id="players" className="highlight-player">
            <Player
              name={players.X}
              symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handlePlayerNameChange}
            />
            <Player
              name={players.O}
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handlePlayerNameChange}
            />
          </ol>

          {/* show GameOver screen if winner or draw */}
          {(winner || hasDraw) && (
            <GameOver winnerSymbol={winner} onRestartGame={handleRestartGame} />
          )}

          {/* game board grid */}
          <GameBoard onSetActivePlayer={handlePlayerChange} board={gameBoard} />
        </div>

        {/* log of all moves */}
        <Log turn={gameTurn} />
      </main>
    </>
  );
}

export default App;
