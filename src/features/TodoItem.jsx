import { BiSolidTrashAlt } from "react-icons/bi";

export default function TodoItem({ item, id, handleDelete }) {
  return (
    <li>
      <span>{item}</span>

      <button className="btn-icon" onClick={() => handleDelete(id)}>
        <BiSolidTrashAlt />
      </button>
    </li>
  );
}
