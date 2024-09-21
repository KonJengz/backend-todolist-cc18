const authService = require("../services/auth-service");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");
const createError = require("../utils/create-error");
const authValidate = require("../validate/auth-validate");

const authController = {};

authController.getAllUser = async (req, res, next) => {
  try {
    const allUser = await authService.getAllUser();

    res.status(200).json({ allUser });
  } catch (err) {
    next(err);
  }
};

authController.register = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;

    authValidate.register(fullname, email, password);

    // find user by email
    const existUser = await authService.findUserbyEmail(email);

    console.log("existUser", existUser);

    if (existUser) {
      return createError(400, "email already in use");
    }

    const hashPassword = await hashService.hash(password);

    console.log("hashPassword", hashPassword);

    const result = await authService.createUser({
      fullname,
      email,
      password: hashPassword,
    });

    res.status(201).json({ result });
  } catch (err) {
    next(err);
  }
};

authController.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existUser = await authService.findUserbyEmail(email);

    console.log("existUser", existUser);

    if (!existUser) {
      return createError(400, "email not found");
    }

    const isMatch = await hashService.compare(password, existUser.password);

    if (!isMatch) {
      return createError(400, "email or password invalid");
    }

    const accessToken = jwtService.sign({ id: existUser.id });

    res.status(200).json({ accessToken });
  } catch (error) {
    next(error);
  }
};

module.exports = authController;
