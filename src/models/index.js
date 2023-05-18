`use strict`;

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelizeDB = new Sequelize(DATABASE_URL);

const food = foodModel(sequelizeDB, DataTypes);







