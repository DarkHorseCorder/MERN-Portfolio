const { app } = require("./app");
const { logger } = require("./services/logger");

const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.listen(PORT, () => {
  logger.info(`Server listening on http://localhost:${PORT}`);
});
