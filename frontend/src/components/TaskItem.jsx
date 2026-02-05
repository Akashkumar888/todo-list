import { useContext } from "react";
import AppContext from "../context/AppContext";

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask } = useContext(AppContext);

  return (
    <li className={task.completed ? "done" : ""}>
  <div>
    <span
      onClick={() => updateTask(task._id, task.completed)}
      style={{ cursor: "pointer" }}
    >
      {task.title}
    </span>

    <div style={{ fontSize: "12px", color: "#666" }}>
      {new Date(task.createdAt).toLocaleString()}
    </div>
  </div>

  <button onClick={() => deleteTask(task._id)}>
    Delete
  </button>
</li>

  );
};

export default TaskItem;
