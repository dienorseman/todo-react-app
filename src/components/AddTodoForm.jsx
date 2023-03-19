import { useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useForm } from "../hooks/useForm";

export const AddTodoForm = ({ handleSubmit }) => {

  const todosLength = JSON.parse(localStorage.getItem('TodosLength'));
  const id = todosLength + 1;
  const { counter, increment } = useCounter(id, 1);

  const { description, onInputChange, inputReset } = useForm({
    id: counter,
    description: "",
    done: false,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: counter,
      description: description,
      done: false,
    };
    handleSubmit(newTodo);
    inputReset();
    increment();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="What needs to be done?"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button className="btn btn-outline-primary mt-3" type="submit">
        Add Todo
      </button>
    </form>
  );
};
