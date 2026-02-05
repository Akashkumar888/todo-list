import express from "express";
import taskRouter from "./routes/task.route.js";

const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/api/tasks", taskRouter);

export default app;
