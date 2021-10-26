const isPath = process.cwd().includes("src");

const dotenv = require("dotenv").config({
  path: isPath ? `${process.cwd()}/.env` : `${process.cwd()}/src/.env`,
});

if (dotenv.error) {
  throw dotenv.error;
}

module.exports = {
  development: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: 3306,
    dialect: "mysql",
    logging: true,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
