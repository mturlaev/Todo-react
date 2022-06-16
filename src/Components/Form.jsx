import React from "react";


export default function Form (props) {
    return(
        <div className="form">
        <input placeholder="Введите текст..."
         type="text"
         value={props.text}
         onChange={(e) => props.setText(e.target.value)}
         />
        <button onClick={props.addTodo}>
          add
        </button>
      </div>
    )
}