const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

require("dotenv").config();

class EmailService {
  static async sendEmail({ name, email, message }) {
    const transporter = nodemailer.createTransport(
      sendgridTransport({
        auth: {
          api_key: process.env.SENDGRID_API_KEY,
        },
      })
    );

    await transporter.sendMail({
      to: process.env.TO_ADDRESS,
      from: process.env.FROM_ADDRESS,
      subject: "New message from portfolio",
      html: `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <br>
      <p><strong>Message:</strong> ${message}</p>`,
    });
  }
}

module.exports = { EmailService };
