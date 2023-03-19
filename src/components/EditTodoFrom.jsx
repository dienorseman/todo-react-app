import { useEffect, useCallback } from "react";
import { useForm } from "../hooks/useForm";

export const EditTodoForm = ({ todo, onEditTodo, setEdited }) => {
  const { description, onInputChange, inputReset } = useForm({
    description: todo.description,
  });

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onEditTodo( todo.id, { description });
      inputReset();
      setEdited(false);
    },
    [onEditTodo, todo.id, description, inputReset]
  );

  useEffect(() => {
    // Do something here
  }, [onSubmit]);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Edit Todo"
        name="description"
        value={description}
        onChange={onInputChange}
      />
    </form>
  );
};
