import { useEffect, useState } from "react";
import doingIcon from "../public/doing.png";
import doneIcon from "../public/done.png";
import todoIcon from "../public/todo.png";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, idx) => idx !== taskIndex);
    setTasks(newTasks);
  };

  console.log("tasks==", tasks);

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To do" icon={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete} />
        <TaskColumn title="Doing" icon={doingIcon} tasks={tasks} status="doing" handleDelete={handleDelete} />
        <TaskColumn title="Done" icon={doneIcon} tasks={tasks} status="done" handleDelete={handleDelete} />
      </main>
    </div>
  );
};

export default App;
