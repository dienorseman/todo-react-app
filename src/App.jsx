import { useReducer } from "react";
import { todoReducer } from "./hooks/todoReducer";

export const App = () => {
  const initialState = [
    {
      id: 1,
      description: "Jump in circles",
      done: false,
    },
    {
      id: 2,
      description: "go to the park",
      done: false,
    },
    {
      id: 3,
      description: "Grab a beer",
      done: false,
    },
  ];

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <div className="row">
        <div className="col-7">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>{" "}
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <form>
            <input
              type="text"
              className="What needs to be done?"
              placeholder="¿Qué hay que hacer?"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
