/* eslint-disable react/prop-types */
import TaskCard from "../TaskCard";
import "./TaskColumn.css";

const TaskColumn = (props) => {
  const { icon, title, tasks, status, handleDelete } = props;
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} className="task_column_icon" alt="" /> {title}
      </h2>
      {tasks.map(
        (task, idx) =>
          task.status === status && (
            <TaskCard key={idx} title={task.task} tags={task.tags} handleDelete={handleDelete} idx={idx} />
          )
      )}
    </section>
  );
};

export default TaskColumn;
