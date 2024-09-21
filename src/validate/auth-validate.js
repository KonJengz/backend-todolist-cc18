const createError = require("../utils/create-error");

const authValidate = {};

authValidate.register = (fullname, email, password) => {
  if (!fullname || !email || !password) {
    return createError(400, "Fullname, Email and password should be provided");
  }

  if (typeof email !== "string" || typeof password !== "string") {
    return createError(400, "typeof email or password should be string");
  }

  if (!email.includes("@")) {
    return createError(400, "format email invalid");
  }
};

module.exports = authValidate;
