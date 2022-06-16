import React from "react";
import Todo from "./Todo";

export default function Todos (props) {
    return(
        <div className="todos">
        {props.todos.map((todo, index) => {
    return(
      <Todo 
      key={index}
      todo={todo}
      index={index}
      makeFavorite={props.makeFavorite}
      deleteTodo={props.deleteTodo}
      />
    )
  })
}
      </div>
    )
}