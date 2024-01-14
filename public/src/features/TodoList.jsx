import { useGlobalContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todo } = useGlobalContext();
  return (
    <div className="box">
      <ul>
        {todo.map((item) => (
          <TodoItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
