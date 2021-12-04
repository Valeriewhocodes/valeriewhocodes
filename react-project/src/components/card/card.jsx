import React, {useState} from 'react';
import './_card.scss';

function Card(props) {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
    setPressed(!pressed);
}
return (
<div className="card-container">
    <p className="card-english-word">{props.english}</p>
    <p className="card-transcription">{props.transcription}</p>
    <button onClick={handleChange} className="card-check-button">{pressed ? [props.russian] : 'Check'}</button>
</div>
)
}

export default Card;