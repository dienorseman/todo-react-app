import { useState } from "react";

function App() {
  const [ newTodo, setNewTodo ] = useState('')
  const [todos, setTodos] = useState([
    "read clean code",
    "write a book about vampires",
    "go to the park",
  ]);

  const onHandleSubmit = (event) => {
    event.preventDefault()
    setTodos(
      [ newTodo, ...todos ]
    )
  }

  return (
    <>
      <main>
        <form className="todo-form" onSubmit={ onHandleSubmit }>
          <input 
          type="text" 
          placeholder="What do we need to do?" 
          onChange={( event )=> setNewTodo( event.target.value )}
          />
          <button>Add Todo</button>
        </form>
        <div className="todos-container">
          <ul>
            {todos.map(( item , index ) => (
              <li key={ index }> <p>{ item }</p><button>X</button></li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
