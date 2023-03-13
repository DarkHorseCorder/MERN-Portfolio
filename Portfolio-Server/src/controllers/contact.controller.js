/** load required packages */
const {
  InternalServerException,
} = require("http-exception-transformer/exceptions");

/** load peer modules and services */
const { logger } = require("../services/logger");
const { EmailService } = require("../services/email.service");

class ContactController {
  static async sendEmail({ name, email, message }) {
    try {
      await EmailService.sendEmail({ name, email, message });
      return { success: true };
    } catch (err) {
      logger.error(err);
      throw new InternalServerException();
    }
  }
}

module.exports = { ContactController };
