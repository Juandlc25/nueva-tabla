import React from "react";
import CirclePlusIcon from "../../icons/CirclePlusIcon";
import PlusIcon from "../../icons/PlusIcon";
import TrashIcon from "../../icons/TrashIcon";
import "./styles.css";

const CustomTable = ({ title, headerTitles }) => {
  return (
    <div className="custom-table">
      <span className="custom-table-title">{title}</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="custom-table-header">
          {headerTitles.map((title, key) => (
            <span key={key}>{title}</span>
          ))}
        </div>
        <Item />
        <Item />
      </div>
      <div className="btn-container">
        <button>
          <span>AGREGAR</span>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

const Item = () => {
  return (
    <div className="item">
      <span>ID</span>
      <select selected="Decimal">
        <option value="Decimal">Decimal</option>
      </select>
      <span>Atributo para xyz</span>
      <div className="item-tags-container">
        <CirclePlusIcon />
      </div>
      <TrashIcon />
    </div>
  );
};

export default CustomTable;
