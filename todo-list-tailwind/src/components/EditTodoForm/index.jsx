/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const EditTodoForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="todo-input"
        onChange={(e) => handleChange(e)}
        value={value}
        ref={inputRef}
        placeholder="Update task..."
      />
      <button type="submit" className="todo-btn">
        Update task
      </button>
    </form>
  );
};

export default EditTodoForm;
