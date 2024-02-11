"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Kempegowda International Airport",
          address: "KIAL Rd, Devanahalli, Bengaluru, Karnataka 560300",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mysuru Airport",
          address: "Mysuru, Karnataka 571311",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indira Gandhi International Airport",
          address: "New Delhi, Delhi 110037",
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HAL Old Airport",
          address: "Bengaluru Karnataka, 560017",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Airports", null, {});
  },
};
