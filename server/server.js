import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectMongoDB from "./db/connectToDB.js";

import { app, server } from "./socket/socket.js";

const port = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

// AUTHENTICATION ROUTES
app.use("/api/auth", authRoutes);

// MESSAGE ROUTES
app.use("/api/messages", messageRoutes);

// SHOW ALL USERS IN SIDEBAR
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

// run client side from server
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

server.listen(port, () => {
  connectMongoDB();
  console.log(`Server is running on port ${port}`);
});
