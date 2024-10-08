'use strict';

const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
        Id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        Cep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Logradouro: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Numero: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        Complemento: {
          type: Sequelize.STRING,
        },
        Bairro: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Cidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Estado: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        MunicipioIBGE: {
          type: Sequelize.STRING,
          allowNull: false,
        },
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos');
  }
}