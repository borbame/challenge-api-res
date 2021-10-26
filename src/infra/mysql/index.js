const errorHandler = ({ message }, msg, rejectFunction) => {
  rejectFunction({ error: msg, message });
};

const accounts = require("./../../services/accounts")({ errorHandler });
const transactions = require("./../../services/transactions")({ errorHandler });

module.exports = {
  accounts: () => accounts,
  transactions: () => transactions,
};
