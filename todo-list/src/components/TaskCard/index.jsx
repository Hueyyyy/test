/* eslint-disable react/prop-types */
import "./TaskCard.css";
import Tag from "../Tag";
import deleteIcon from "../../../public/delete.png";
const TaskCard = (props) => {
  const { title, tags, handleDelete, idx } = props;
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, idx) => (
            <Tag key={idx} tagName={tag} selected={true} />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(idx)}>
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
