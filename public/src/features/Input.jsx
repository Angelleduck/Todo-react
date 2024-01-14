import { useGlobalContext } from "../context/TodoContext";

export default function Input() {
  const { text, setText, setTodo } = useGlobalContext();
  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") return;
    setTodo((Todo) => [...Todo, { id: Date.now(), data: text, packed: false }]);
    setText("");
  }
  return (
    <form className="Todo-form" onSubmit={handleSubmit}>
      <input
        className="input-task"
        type="text"
        placeholder="Enter the task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn-submit">Add Task</button>
    </form>
  );
}
