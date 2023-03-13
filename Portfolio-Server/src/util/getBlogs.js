const axios = require("axios");
const {
  InternalServerException,
} = require("http-exception-transformer/exceptions");

require("dotenv").config();

const getBlogs = async (page) => {
  try {
    const response = await axios.get(
      `https://dev.to/api/articles/me?per_page=6&page=${page}`,
      {
        headers: {
          "api-key": process.env.DEV_API_KEY,
        },
      }
    );
    return response.data;
  } catch (err) {
    throw new InternalServerException();
  }
};

module.exports = { getBlogs };
