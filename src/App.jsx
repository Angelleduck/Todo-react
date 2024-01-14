import { useEffect, useState } from "react";
import TodoList from "./features/TodoList";
import Input from "./features/Input";

export default function App() {
  const todoStorage = JSON.parse(localStorage.getItem("todo")) || [];
  const [text, setText] = useState("");
  const [todo, setTodo] = useState(todoStorage);

  function handleDelete(id) {
    setTodo((todo) => todo.filter((item) => item.id !== id));
  }
  useEffect(
    function () {
      localStorage.setItem("todo", JSON.stringify(todo));
    },
    [todo]
  );
  return (
    <div className="App">
      <Header />
      <Input text={text} setText={setText} setTodo={setTodo} />
      <TodoList todo={todo} handleDelete={handleDelete} />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h2>The React Todo List</h2>
    </div>
  );
}
