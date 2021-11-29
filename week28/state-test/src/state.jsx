import React, {useState} from "react";
import './App.scss';

function Tariff(props) {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
    setPressed(!pressed);
}
return(
    <div className="tariff" > 
        <div  >
            <div className="tariff-name">Безлимитный {props.name}</div>
            <div className="tariff-value">руб {props.value} /мес.</div>
        </div>
        <div className="tariff-footer">
            <div className="tariff-speed">до {props.speed} Мбит/сек</div>
            <div className="tariff-volume">Объем включенного трафика неограничен</div>
            <button onClick={handleChange} className={pressed ? 'selected' : ''}>Выбрать</button>
        </div>
    </div>
)
}

export default Tariff;