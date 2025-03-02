const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join", (username) => {
    socket.username = username;
    console.log(`${username} joined the chat`);
  });

  socket.on("message", (data) => {
    io.emit("message", data); // Sabko message bheje
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.username || "Unknown");
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
