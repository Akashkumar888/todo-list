import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../axios/api";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/api/tasks/all-tasks");
      setTasks(data);
    } catch {
      toast.error("❌ Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title) => {
    if (!title.trim()) {
      toast.warning("⚠️ Task title cannot be empty");
      return;
    }
    try {
      await api.post("/api/tasks/create-tasks", { title });
      toast.success("✅ Task added");
      fetchTasks();
    } catch {
      toast.error("❌ Failed to add task");
    }
  };

  const updateTask = async (id, completed) => {
    try {
      await api.put(`/api/tasks/update/${id}`, {
        completed: !completed,
      });
      toast.info("🔄 Task updated");
      fetchTasks();
    } catch {
      toast.error("❌ Failed to update task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/api/tasks/delete/${id}`);
      toast.error("🗑️ Task deleted"); // red toast
      fetchTasks();
    } catch {
      toast.error("❌ Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

const value={ tasks, 
  loading, 
  addTask, 
  updateTask, 
  deleteTask 
};

  return (
    <AppContext.Provider
      value={value}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
