import "dotenv/config";
import http from "http";
import app from "./app.js";
import connectDB from "./configs/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`🚀 Server running on port http://localhost:${PORT}`);
  });
};

startServer();
