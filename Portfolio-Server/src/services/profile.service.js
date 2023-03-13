const profiles = require("../data/profiles");

class ProfileService {
  /**
   * @returns profile url of the given profile name
   * @param {string} profileName
   */
  static getProfile(profileName) {
    const profile = profiles.find(
      (profile) => profile.profileName === profileName
    );
    return profile.profileUrl;
  }
}

module.exports = { ProfileService };
