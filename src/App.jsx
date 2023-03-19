
import { AddTodoComponent, TodoList } from "./components";
import { useTodo } from "./hooks/useTodo";


export const App = () => {
 
  const { todos, handleDeleteTodo, handleToggleTodo, handleEditTodo, handleSubmit } = useTodo();

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
