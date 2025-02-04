'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      hobbies: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      avatar:{
        type: Sequelize.STRING
      },
      genderId: {
        type: Sequelize.INTEGER,
        references : {
          model: {
            tableName: "Genders"
          },
          key: "id"
        }
      },
      rolId: {
        type: Sequelize.INTEGER,
        references : {
          model: {
            tableName: "Rols"
          },
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};