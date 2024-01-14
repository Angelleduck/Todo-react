import { BiSolidTrashAlt } from "react-icons/bi";
import { useGlobalContext } from "../context/TodoContext";

export default function TodoItem({ item }) {
  const { handleDelete, handleToggle } = useGlobalContext();
  return (
    <li>
      <div className="checkanditem">
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => handleToggle(item.id)}
        />
        <span
          style={
            item.packed
              ? {
                  textDecoration: "line-through",
                  textDecorationColor: "black",
                }
              : {}
          }
        >
          {item.data}
        </span>
      </div>
      <button className="btn-icon" onClick={() => handleDelete(item.id)}>
        <BiSolidTrashAlt />
      </button>
    </li>
  );
}
