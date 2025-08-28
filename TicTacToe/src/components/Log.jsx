export default function Log({turn}) {
    return (
        // Render a list of turns taken in the game
        <ol id="log"> 
            {turn.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    Player {turn.player} placed on row {turn.square.row + 1}, column {turn.square.col + 1}
                </li>
            ))}
        </ol>
    );
}