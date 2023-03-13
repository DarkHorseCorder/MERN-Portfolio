/** load required packages */
const {
  InternalServerException,
} = require("http-exception-transformer/exceptions");

/** load peer modules and services */
const { logger } = require("../services/logger");
const { BlogService } = require("../services/blog.service");

/**
 * BlogController contains definitions of all route handlers in /blog namespace.
 */
class BlogController {
  /**
   * each member function of controller is attached to each route
   */
  static async getAllPosts(page) {
    try {
      const posts = await BlogService.getAllPosts(page);
      return posts;
    } catch (err) {
      logger.error(err);
      throw new InternalServerException();
    }
  }
}

module.exports = { BlogController };
