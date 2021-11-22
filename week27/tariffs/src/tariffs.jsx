import React from "react";

function Tariff(props) {
    let classTariff = "";
    if(props.isSelected) classTariff="selected";
return(
    <div className={`tariff ${classTariff}`}> {props.isSelected}
        <div className="tariff-body">
            <div className="tariff-name">Безлимитный {props.name}</div>
            <div className="tariff-value">руб {props.value} /мес.</div>
        </div>
        <div className="tariff-footer">
            <div className="tariff-speed">до {props.speed} Мбит/сек</div>
            <div className="tariff-volume">Объем включенного трафика неограничен</div>
        </div>
    </div>
)

}
export default Tariff;