import express from "express";
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.get("/all-tasks", getAllTasks);
taskRouter.post("/create-tasks", createTask);
taskRouter.put("/update/:id", updateTask);
taskRouter.delete("/delete/:id", deleteTask);

export default taskRouter;
