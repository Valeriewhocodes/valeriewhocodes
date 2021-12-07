import React, { useState } from "react";
import "./_table.scss";

function TableBody(props) {
    return(
        <tr className="table-body-container">
      <td className="table-cell">{props.english}</td>
      <td className="table-cell">{props.transcription}</td>
      <td className="table-cell">{props.russian}</td>
      <td className="table-cell"></td>
    </tr>
    )
}
export default TableBody