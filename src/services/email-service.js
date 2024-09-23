const transporter = require("../config/mail");

const emailService = {};

emailService.sendEmail = async (email, subject) => {
  const info = await transporter.sendMail({
    from: process.env.GMAIL, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: "Hello world?9869676 Jeng", // plain text body
    html: "<b>Hello world?</b>", // html body
    // attachments: [
    //     {
    //         filename: attachmentFilename,
    //         path: attachmentPath
    //     }
    // ]
  });
};

module.exports = emailService;
