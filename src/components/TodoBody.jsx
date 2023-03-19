

export const TodoBody = ({
    todo,
    onToggleTodo,
}) => {
  return (
    <>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggleTodo(todo.id)}
          />
          <span
            className={`align-self-center ${
              todo.done && "text-decoration-line-through"
            }`}
            onClick={() => onToggleTodo(todo.id)}
          >
            {todo.description}
          </span>
        </>
  )
}
