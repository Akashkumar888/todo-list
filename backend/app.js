import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.route.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://todo-list-2rgz.vercel.app",
      "https://todo-list-phi-five-15.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/api/tasks", taskRouter);

export default app;
