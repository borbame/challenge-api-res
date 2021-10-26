const cors = require("cors");

module.exports = cors({
  origin: true,
  methods: ["GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "x-xsrf-token"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  preflightContinue: true,
  credentials: true,
  optionsSuccessStatus: 200,
});
