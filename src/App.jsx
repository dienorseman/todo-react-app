import { useState } from "react";

function App() {

  const [newTodo, setNewTodo] = useState({});
  const [nextId, setNextId] = useState(1);
  const [todos, setTodos] = useState([]);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setTodos([ ...todos, newTodo ]);
    setNewTodo({});
    setNextId(nextId + 1);

  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // console.log(id);
  };

  const handleEditTodo = (id) => {
    return
  }

  return (
    <>
      <main>
        <form className="todo-form" onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="What do we need to do?"
            value={newTodo.content || ""}
            onChange={(event) => {
              setNewTodo({
                id: nextId,
                content: event.target.value,
              });
              // console.log(newTodo);
            }}
          />
          <button>Add Todo</button>
        </form>
        <div className="todos-container">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <p>
                  {todo.content}
                </p>
                <button  onClick={ handleEditTodo } >edit</button>
                <button onClick={ () => handleDeleteTodo(todo.id) } >X</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
