"use strict";
import fessBackSchema from "@/ApiSchema/feedback";
import connectDB from "@/config/database";
import errorHandler from "@/utils/error";
const nodemailer = require("nodemailer");

export default async (req, res) => {
  if (req.method == "POST") {
    const { name, email, subject, message } = req.body;
    if (!name || !email) {
      return errorHandler(res, 400, "Please Enter All Field !");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return errorHandler(res, 404, "Enter valid Email !");
    }

    if (nodemailer) {
      res.setHeader("Content-Type", "text/plain");
      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "diamond.schaden@ethereal.email",
          pass: "ZNWFPWCYhgnhyhHxed",
        },
      });
      const mailmessage = {
        from: "cprakash1490@gmail.com", // sender address
        to: email, // list of receivers
        subject: `${subject} ✔`, // Subject line
        text: `${message} ?`, // plain text body
        html: "<b>Chandra Prakash blog?</b>", // html body
      };
      await connectDB();

      const data = await fessBackSchema
        .create({
          name,
          email,
          subject,
          message,
        })
        .then(() => {
          transporter
            .sendMail(mailmessage)
            .then(() => {
              res.status(200).json({
                success: true,
                message: "you should have an email",
              });
            })
            .catch((err) => {
              res.status(200).json({
                success: false,
                message: err,
              });
            });
        });

      res.status(200).json({
        success: true,
        message: "feedback successfully submit !",
        // records: {
        //     name,
        //     email,
        //     feedback,
        //     message
        // }
      });
    }
  } else {
    return errorHandler(res, 404, "error 404");
  }
};
