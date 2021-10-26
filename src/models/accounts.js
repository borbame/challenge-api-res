"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accounts.init(
    {
      idAccount: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      idPeople: DataTypes.INTEGER,
      balance: DataTypes.DOUBLE,
      limitBalance: DataTypes.DOUBLE,
      flagActive: DataTypes.BOOLEAN,
      accountType: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Accounts",
    }
  );
  return Accounts;
};
