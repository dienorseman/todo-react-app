import { useState, } from "react";
import { EditTodoFrom } from "./EditTodoFrom";
import { TodoBody } from "./TodoBody";

export const ListItem = ({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) => {
  const [edited, setEdited] = useState(false);
  const { id } = todo;
  
  return (
    <li className="list-group-item d-flex justify-content-between">
      {edited ? (
        <EditTodoFrom
            todo={todo}
            onEditTodo={onEditTodo}
            setEdited={setEdited}
        />
      ) : (
        <TodoBody todo={todo} onToggleTodo={onToggleTodo} />
      )}
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
