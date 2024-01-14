import TodoList from "./features/TodoList";
import Input from "./features/Input";
import { TodoContext } from "./context/TodoContext";

export default function App() {
  return (
    <TodoContext>
      <div className="App">
        <Header />
        <Input />
        <TodoList />
      </div>
    </TodoContext>
  );
}

function Header() {
  return (
    <div>
      <h2>The React Todo List</h2>
    </div>
  );
}
