
import { useContext, useState } from "react";
import AppContext from "../context/AppContext";


const TaskInput = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useContext(AppContext);

  const handleAdd = () => {
    addTask(title);
    setTitle("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
