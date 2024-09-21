const express = require("express");
const todoController = require("../controllers/todo-controller");
const todoRouter = express.Router();

todoRouter.get("/:userId", todoController.getAlltodoByUserId);
todoRouter.post("/:userId", todoController.createTodo);

module.exports = todoRouter;
