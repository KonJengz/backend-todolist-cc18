const authService = require("../services/auth-service");
const jwtService = require("../services/jwt-service");
const createError = require("../utils/create-error");

const authenticate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer")) {
      return createError(401, "Unauthorized");
    }

    console.log("authorization---", authorization);

    const token = authorization.split(" ")[1];

    if (!token) {
      return createError(401, "Unauthorized");
    }

    const payload = jwtService.verify(token);
    //jwt.verify(token, process.env.JWT_SECRET);

    const user = await authService.findUserById(payload.id);

    if (!user) {
      return createError(401, "Unauthorized");
    }

    delete user.password;
    console.log("user auth----", user);

    req.user = user;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
