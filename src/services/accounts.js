const accounts = (deps) => {
  const { Accounts } = require("./../models");

  return {
    create: (payload) => {
      return new Promise(async (resolve, reject) => {
        try {
          await Accounts.create({ ...payload });
          resolve({
            message: "Create successfully",
            status: "ok",
          });
        } catch (err) {
          const { errorHandler } = deps;
          return errorHandler(err, "Failure to create", reject);
        }
      });
    },
  };
};

module.exports = accounts;
