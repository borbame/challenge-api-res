"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Peoples",
      [
        {
          name: "John Doe",
          cpf: "999.000.000-60",
          bornDate: new Date("1993"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Peoples", null, {});
  },
};
