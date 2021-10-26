"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Accounts", {
      idAccount: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idPeople: {
        type: Sequelize.INTEGER(11),
        references: {
          model: "Peoples",
          key: "idPeople",
        },
      },
      balance: {
        type: Sequelize.DOUBLE,
      },
      limitBalance: {
        type: Sequelize.DOUBLE,
      },
      flagActive: {
        type: Sequelize.BOOLEAN,
      },
      accountType: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Accounts");
  },
};
