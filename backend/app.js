import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.route.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://todo-list-2rgz-424w9sron-akashs-projects-f5c26188.vercel.app",
      "https://todo-list-2rgz.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/api/tasks", taskRouter);

export default app;
