import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

function TodoContext({ children }) {
  const todoStorage = JSON.parse(localStorage.getItem("todo")) || [];
  const [todo, setTodo] = useState(todoStorage);
  const [text, setText] = useState("");

  useEffect(
    function () {
      localStorage.setItem("todo", JSON.stringify(todo));
    },
    [todo]
  );

  function handleDelete(id) {
    setTodo((todo) => todo.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    console.log(todo);
    setTodo((todo) =>
      todo.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <GlobalContext.Provider
      value={{ todo, setTodo, text, setText, handleDelete, handleToggle }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (context === undefined) throw new Error("wrong context");
  return context;
}

export { useGlobalContext, TodoContext };
