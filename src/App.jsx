import { useReducer } from "react";
import { useEffect } from "react";
import { AddTodoComponent } from "./components/AddTodoComponent";
import { TodoList } from "./components/TodoList";
import { todoReducer } from "./hooks/todoReducer";


export const App = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse( localStorage.getItem( 'Todos' )) || []
  }

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify( todos ))
    localStorage.setItem("TodosLength", todos.length.toString());
  }, [todos])
  

  const handleSubmit = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = ( id ) => {
    const action = {
      type: "[TODO] Delete Todo",
      payload: id, 
    }

    dispatch(action)
  }

  const handleToggleTodo = ( id ) => {
    // console.log( id );
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id, 
    }

    dispatch(action)
  }

  const handleEditTodo = ( { id, description } ) => {

    const action = {
      type: "[TODO] Edit Todo",
      payload: { id, description },

    };
    dispatch(action);
  }

  return (
    <div>
      <h1>Todo App </h1>
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } onEditTodo={ handleEditTodo }/>
        </div>{" "}
        <div className="col-5">
          <AddTodoComponent handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
