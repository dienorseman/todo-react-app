

export const EditTodoFrom = ( {description, onInputChange, onSubmit} ) => {
  return (
     <form onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Todo"
            name="description"
            value={description}
            onChange={onInputChange}
          />
        </form>
  )
}
