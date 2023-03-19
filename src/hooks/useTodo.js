import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

export const useTodo = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("Todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
    localStorage.setItem("TodosLength", todos.length.toString());
  }, [todos]);

  const handleSubmit = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Delete Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    // console.log( id );
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleEditTodo = (id, { description }) => {
    // console.log( id, description);
    const action = {
      type: "[TODO] Edit Todo",
      payload: { id, description },
    };
    dispatch(action);
  };

  return {
    todos,
    handleSubmit,
    handleDeleteTodo,
    handleToggleTodo,
    handleEditTodo,
  };
};
