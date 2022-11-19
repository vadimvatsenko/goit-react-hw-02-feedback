


export default function Statistics({ good, neutral, bad, total, percentage }) {
    return (
        <ul>
            <li>
                <span>Good: </span>
                <span>{good}</span>
            </li>
            <li>
                <span>Neutral: </span>
                <span>{neutral}</span>
            </li>
            <li>
                <span>Bad: </span>
                <span>{bad}</span>
            </li>
                
            <li>
                <span>Total: </span>
                <span>{total}</span>
            </li>
            <li>
                <span>Positive feedback: </span>
                <span>{percentage}%</span>
            </li>
        </ul>
    );
}