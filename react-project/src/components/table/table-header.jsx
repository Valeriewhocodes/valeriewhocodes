import React, { useState } from "react";
import "./_table.scss";

function TableHeader() {
  return (
    <tr className="table-header-container">
      <td className="table-cell">Word</td>
      <td className="table-cell">Transcription</td>
      <td className="table-cell">Translation</td>
      <td className="table-cell"></td>
    </tr>
  );
}
export default TableHeader;
