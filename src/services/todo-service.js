const prisma = require("../config/prisma");

const todoService = {};

todoService.getTodoByUserId = (userId) => {
  return prisma.todoList.findMany({
    where: { userId },
  });
};

module.exports = todoService;
