export default function Log({turn}) {
    return (
        <ol id="log">
            {turn.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    Player {turn.player} placed on row {turn.square.row + 1}, column {turn.square.col + 1}
                </li>
            ))}
        </ol>
    );
}