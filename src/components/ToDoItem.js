import React from "react";
import '../styles.scss'

function ToDoItem(props) {
  return (
    <div className="items">
      <li>
        <img
          src={ props.text.checked ? "../assets/tick.png" : "../assets/empty.png" }
          alt="tick"
          width="30"
          onClick={() => {
            props.onChecked(props.id);
          }}
        />
        <span>{props.text.name}</span>
        {<img
          className="remove"
          align="right"
          src="../assets/remove.png"
          width="20"
          alt="remove"
          onClick={() => {
            props.onRemove(props.id);
          }}
        />}
      </li>
    </div>
  );
}

export default ToDoItem;
