import { styles } from "./styles.css";
import React from "react";
import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Todos from "./Components/Todos";

function App() {
  // let todoClass = "todo";

  // if(todo.favorite === true) {
  //   todoClass = "todo selected"
  // }
  //const todoClass = todo.favorite ? "todo selected" : "todo"
  // const todoClass = `todo ${todo.favorite ? "selected" : ""}`

  const [todos, setTodos] = useState([
    {
      text: "Продаю людей, бананы",
      favorite: false,
    },
    {
      text: "Шучу не бананы",
      favorite: true,
    },
    {
      text: "Ц1авахан д1авиж",
      favorite: false,
    },
  ]);

  const [text, setText] = useState("");

  const deleteTodo = (indexOfRemovingItem) => {
    const filtered = todos.filter((todo, index) => {
      if (index === indexOfRemovingItem) {
        return false;
      }
      return true;
    });
    setTodos(filtered);
  };

  const makeFavorite = (i) => {
    const newTodos = todos.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    setTodos([
      {
        text: text,
        favorite: false,
      },
      ...todos,
    ]);
    setText("");
  };

  return (
    <div className="app">
      <Header />
      <Form text={text} setText={setText} addTodo={addTodo} />
      <Todos
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
