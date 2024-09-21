const todoService = require("../services/todo-service");
const createError = require("../utils/create-error");

const todoController = {};

todoController.getAlltodoByUserId = async (req, res, next) => {
  try {
    const userId = +req.params.userId;

    if (isNaN(userId)) {
      return createError(400, "user id incorrect type");
    }

    const result = await todoService.getTodoByUserId(userId);
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};

todoController.createTodo = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = todoController;
