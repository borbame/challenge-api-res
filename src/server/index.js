const express = require("express");
const server = express();
const cors = require("./../config/cors");
const createRouter = require("./../http/routes");
const bodyParse = require("body-parser");

server.use(cors);
server.use(bodyParse.json());
server.use(bodyParse.urlencoded({ extended: true }));

createRouter(server);

module.exports = server;
