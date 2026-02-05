import taskModel from "../models/task.model.js";

// GET all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// CREATE task
export const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await taskModel.create({ title });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE task
export const updateTask = async (req, res) => {
  try {
    const { completed } = req.body;

    const task = await taskModel.findByIdAndUpdate(
      req.params.id,
      { completed },
      { new: true }
    );

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE task
export const deleteTask = async (req, res) => {
  try {
    await taskModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
