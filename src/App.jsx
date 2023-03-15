import { useReducer } from "react"
import { todoReducer } from "./hooks/todoReducer"

export const App = () => {

  const initialState = [
    {
      id: 1,
      description: 'Jump in circles',
      done: false,
    },
    {
      id: 2, 
      description: 'go to the park',
      done: false,
    },
    {
      id: 3,
      description: 'Grab a beer',
      done: false,
    }
  ]

  const [state, dispatch] = useReducer( todoReducer, initialState)

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
          <li>Item 1</li>
      </ul>
    </div>
  )
}
