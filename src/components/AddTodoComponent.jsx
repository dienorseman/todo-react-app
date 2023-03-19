import { AddTodoForm } from "./AddTodoForm";

export const AddTodoComponent = ( { handleSubmit } ) => {
  return (
    <>
      <h4>Add Todo</h4>
      <hr />
      <AddTodoForm  handleSubmit={ handleSubmit }/>
    </>
  );
};
