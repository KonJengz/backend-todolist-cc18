require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./src/routes/auth-router");
const todoRouter = require("./src/routes/todo-router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/v1/todo", todoRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`run port ${port}`));
