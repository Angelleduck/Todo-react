export default function Input({ text, setText, setTodo }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") return;
    setTodo((Todo) => [...Todo, { id: Date.now(), data: text }]);
    setText("");
  }
  return (
    <form className="Todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn-submit">Add Task</button>
    </form>
  );
}
