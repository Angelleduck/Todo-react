import TodoItem from "./TodoItem";

export default function TodoList({ todo, handleDelete }) {
  return (
    <div className="box">
      <ul>
        {todo.map((items) => (
          <TodoItem
            item={items.data}
            key={items.id}
            id={items.id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
