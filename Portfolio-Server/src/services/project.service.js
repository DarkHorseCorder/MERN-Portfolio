const projects = require("../data/projects");

class ProjectService {
  /**
   * @returns Array of projects
   */
  static getAllProjects() {
    return projects;
  }

  /**
   * @param {String} repoName
   * @returns videoId
   */
  static getVideoId(repoName) {
    const project = projects.find((project) => project.repoName === repoName);
    return project.videoId;
  }
}

module.exports = { ProjectService };
