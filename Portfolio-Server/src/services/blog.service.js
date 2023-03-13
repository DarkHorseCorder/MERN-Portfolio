const { getBlogs } = require("../util/getBlogs");

class BlogService {
  /**
   * @returns Array of posts
   */
  static async getAllPosts(page) {
    const posts = await getBlogs(page);
    return posts;
  }
}

module.exports = { BlogService };
