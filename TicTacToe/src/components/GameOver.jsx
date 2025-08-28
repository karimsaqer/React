export default function GameOver({winnerSymbol, onRestartGame}) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winnerSymbol && <p>Winner is {winnerSymbol}</p>}
            {!winnerSymbol && <p>It's a Draw!</p>}
            <button id="restart-button" onClick={onRestartGame}>Restart Game</button>
        </div>
    );
}