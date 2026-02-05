import express from "express";
import cors from "cors";
import taskRouter from "./routes/task.route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // ✅ frontend URL
    credentials: true,               // ✅ allow cookies / auth headers
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
