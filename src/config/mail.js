const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASS_EMAIL,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
