`use strict`;

// Imports
const { Sequelize, DataTypes } = require('sequelize');
const foodModel = require('./food');
const clothesModel = require('./clothes');

// will make dynamic for testing environment
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

// database singleton
const sequelizeDB = new Sequelize(DATABASE_URL);

// create our working and connected database model
const food = foodModel(sequelizeDB, DataTypes);
const clothes = clothesModel(sequelizeDB, DataTypes);

// Exports
module.exports = {
  sequelizeDB,
  foodModel,
  clothesModel,
};





