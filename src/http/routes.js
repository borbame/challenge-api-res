const db = require("./../infra/mysql");

const routes = (server) => {
  server.post("/account/create", async (request, response, next) => {
    const { payload } = request.body;

    try {
      response.status(201).json(await db.accounts().create(payload));
    } catch (error) {
      response.status(403).json(error);
    }
    next();
  });
};

module.exports = routes;
