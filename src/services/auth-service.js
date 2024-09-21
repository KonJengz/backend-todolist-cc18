const prisma = require("../config/prisma");

const authService = {};

authService.getAllUser = () => {
  return prisma.user.findMany();
};

authService.findUserbyEmail = (email) => {
  return prisma.user.findFirst({
    where: { email },
  });
};

authService.createUser = (data) => {
  return prisma.user.create({
    data,
  });
};

module.exports = authService;
