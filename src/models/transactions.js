"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transactions.init(
    {
      idTransaction: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      idAccount: DataTypes.INTEGER,
      value: DataTypes.DOUBLE,
      transactionDate: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Transactions",
    }
  );
  return Transactions;
};
