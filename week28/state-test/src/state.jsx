import React, {useState} from "react";

function Tariff(props) {
    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
    setPressed(!pressed);
}
return(
    <div className="tariff"> 
        <div className="tariff-body">
            <div className="tariff-name">Безлимитный {props.name}</div>
            <div className="tariff-value">руб {props.value} /мес.</div>
        </div>
        <div className="tariff-footer">
            <div className="tariff-speed">до {props.speed} Мбит/сек</div>
            <div className="tariff-volume">Объем включенного трафика неограничен</div>
            <button onClick={handleChange}>{pressed ? "Выбрано!" : "Выбрать"}</button>
        </div>
    </div>
)
}

export default Tariff;