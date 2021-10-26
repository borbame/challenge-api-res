"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Peoples extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Peoples.init(
    {
      idPeople: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      cpf: DataTypes.STRING,
      bornDate: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Peoples",
    }
  );
  return Peoples;
};
