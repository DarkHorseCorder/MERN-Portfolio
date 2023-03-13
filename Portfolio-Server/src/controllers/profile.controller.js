/** load required packages */
const {
  InternalServerException,
} = require("http-exception-transformer/exceptions");

/** load peer modules and services */
const { logger } = require("../services/logger");
const { ProfileService } = require("../services/profile.service");

/**
 * ProfleController contains definitions of all route handlers in /profile namespace.
 */
class ProfileController {
  /**
   * each member function of controller is attached to each route
   */
  static getProfile(profileName) {
    try {
      return ProfileService.getProfile(profileName);
    } catch (err) {
      logger.error(err);
      throw new InternalServerException();
    }
  }
}

module.exports = { ProfileController };
