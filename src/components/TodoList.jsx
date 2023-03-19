import { ListItem } from "./ListItem";


export const TodoList = ( { todos, onDeleteTodo, onToggleTodo, onEditTodo } ) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ListItem key={ todo.id } todo={ todo } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo } onEditTodo={ onEditTodo }/>
      ))}
    </ul>
  );
};
