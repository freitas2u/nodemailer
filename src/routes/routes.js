require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const routes = express.Router();

routes.post("/sendMail", (request, response) => {
  const { to, cc, bcc, subject, message } = request.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.PASSWORD || "inspecaoveicular.brk@gmail.com",
      pass: process.env.EMAIL || "@1nsp3c40v31cu10@",
    },
  });

  let mailOptions = {
    from: process.env.PASSWORD,
    to: to,
    cc: cc,
    bcc: bcc,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return response.status(500).json({ message: err.message });
    } else {
      return response.status(200).json({ message: "E-mail enviado" });
    }
  });
});

module.exports = routes;
