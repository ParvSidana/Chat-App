import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectMongoDB from "./db/connectToDB.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// AUTHENTICATION ROUTES
app.use("/api/auth", authRoutes);
// MESSAGE ROUTES
app.use("/api/messages", messageRoutes);
// SHOW ALL USERS IN SIDEBAR
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   //root route render...
//   res.send("hello world");
// });

app.listen(port, () => {
  connectMongoDB();
  console.log(`Server is running on port ${port}`);
});
