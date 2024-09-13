/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    if (value !== "") {
      addTodo(value);
    }
    setValue("");
    e.preventDefault();
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
        placeholder="What do you do today?"
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
