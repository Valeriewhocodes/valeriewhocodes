import React, { useState } from "react";
import "./_table.scss";

function TableInputs() {
  return (
    
      <tr>
        <td className="table-cell">
          <input type="text"></input>
        </td>
        <td className="table-cell">
          <input type="text"></input>
        </td>
        <td className="table-cell">
          <input type="text"></input>
        </td>
        <td className="table-cell">
          <button className="table-button-save">Save
          </button>
          <button className="table-button-edit">Edit
          </button>
          <button className="table-button-delete">Delete
          </button>
        </td>
      </tr>
   
  );
}
export default TableInputs;
