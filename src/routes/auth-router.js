const express = require("express");
const authController = require("../controllers/auth-controller");
const authenticate = require("../middlewares/authentication");
const authRouter = express.Router();

authRouter.get("/", authController.getAllUser);
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/forget-password", authController.forgetPassword);
// authRouter.patch("/change-password:key", authController.login);

module.exports = authRouter;
