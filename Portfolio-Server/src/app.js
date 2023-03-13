const express = require("express");

/**
 * load middleware
 */
const cors = require("cors");
const { HttpExceptionTransformer } = require("http-exception-transformer");

/**
 * load services
 */

/**
 * load routes
 */
const BlogRoutes = require("./routes/blog.routes");
const ProjectRoutes = require("./routes/project.routes");
const ContactRoutes = require("./routes/contact.routes");
const ProfileRoutes = require("./routes/profile.routes");

/**
 * declare application and load middleware
 */
const app = express();

app.use(cors());

/**
 * use json parser and body parser
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * initialize services
 */

/**
 * show alive status on server root
 */
app.get("/", (req, res) => {
  res.send({ alive: true });
});

/**
 * bind all routes to application
 */
app.use("/api/blog", BlogRoutes);
app.use("/api/project", ProjectRoutes);
app.use("/api/contact", ContactRoutes);
app.use("/api/profile", ProfileRoutes);

/**
 * transform all errors into standard messages
 */
app.use(HttpExceptionTransformer);

/**
 * export application to be served or tested
 */
module.exports = { app };
