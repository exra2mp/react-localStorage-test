import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  //   console.log(props)
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className='col-9'>
      <input
        type='text'
        placeholder='Enter a new task...'
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className='form-control'
      />
      </div>
      <div className='col-3 p-0 d-flex align-items-center'>
         <button classsName='btn btn-primary btn-sm' type="submit">Save Task</button>
      </div>
    </form>
  );
};
