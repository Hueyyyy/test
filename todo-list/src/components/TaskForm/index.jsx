/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Tag from "../Tag";
import "./TaskForm.css";

const TaskForm = (props) => {
  const { setTasks } = props;
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleChange = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectTag = (tagName) => {
    console.log("tagName:::", tagName);
    if (taskData.tags.some((item) => item === tagName)) {
      const filterTags = taskData.tags.filter((item) => item !== tagName);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagName] };
      });
    }
  };

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="task_input"
          name="task"
          value={taskData.task}
          id=""
          placeholder="Enter your task"
          onChange={(e) => handleChange(e)}
        />
        <div className="task_form_bottom_line">
          <div className="">
            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
            <Tag tagName="SCSS" selectTag={selectTag} selected={checkTag("SCSS")} />
            <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")} />
            <Tag tagName="TypeScript" selectTag={selectTag} selected={checkTag("TypeScript")} />
            <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
          </div>

          <div className="">
            <select className="task_status" name="status" value={taskData.status} onChange={(e) => handleChange(e)}>
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
