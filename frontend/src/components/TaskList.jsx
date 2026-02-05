import { useContext } from "react";
import TaskItem from "./TaskItem";
import AppContext from "../context/AppContext";

const TaskList = () => {
  const { tasks, loading } = useContext(AppContext);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
