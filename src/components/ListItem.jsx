import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { EditTodoFrom } from "./EditTodoFrom";

export const ListItem = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  const [edited, setEdited] = useState(false);
  const { id, done } = todo;
  const {
    description,
    onInputChange,
    inputReset,
  } = useForm({
    description: todo.description,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    onEditTodo({ id, description });
    inputReset();
    setEdited(!edited);
  };
  return (
    <li className="list-group-item d-flex justify-content-between">
      {!edited && (
        <>
          <input
            type="checkbox"
            checked={done}
            onChange={() => onToggleTodo(id)}
          />
          <span
            className={`align-self-center ${
              done && "text-decoration-line-through"
            }`}
            onClick={() => onToggleTodo(id)}
          >
            {todo.description}
          </span>
        </>
      )}
      {edited && <EditTodoFrom onSubmit={onSubmit} onInputChange={onInputChange} description={description} />}
      <div className="btn-group btn-group-sm align-self-center justify-content-end align-items-center">
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => {
            setEdited(!edited);
          }}
        >
          Edit
        </button>

        <button className="btn btn-danger " onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
