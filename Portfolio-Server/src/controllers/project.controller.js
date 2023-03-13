/** load required packages */
const {
  InternalServerException,
} = require("http-exception-transformer/exceptions");

/** load peer modules and services */
const { logger } = require("../services/logger");
const { ProjectService } = require("../services/project.service");

/**
 * ProjectController contains definitions of all route handlers in /project namespace.
 */
class ProjectController {
  /**
   * each member function of controller is attached to each route
   */
  static getAllProjects() {
    try {
      return ProjectService.getAllProjects();
    } catch (err) {
      logger.error(err);
      throw new InternalServerException();
    }
  }

  static getVideoId(repoName) {
    try {
      return ProjectService.getVideoId(repoName);
    } catch (err) {
      logger.error(err);
      throw new InternalServerException();
    }
  }
}

module.exports = { ProjectController };
