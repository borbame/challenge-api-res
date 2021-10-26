const server = require("./server");
const dotenv = require("dotenv");

function loadEnvironment() {
  dotenv.config(process.cwd() + "/src/.env");

  if (dotenv.error) {
    throw new Error("Fail load dotenv", dotenv.error);
  }
}

loadEnvironment();
server.listen(process.env.port || 3000);
console.log("listening on port " + process.env.port || 3000);
