const transactions = (deps) => {
  const { Accounts } = require("./../models");

  return {
    create: (payload) => {
      return new Promise(async (resolve, reject) => {
        try {
          const accounts = await Accounts.create({ ...payload });
          resolve(accounts);
        } catch (err) {
          const { errorHandler } = deps;
          return errorHandler(err, "Failure create", reject);
        }
      });
    },
  };
};

module.exports = transactions;
