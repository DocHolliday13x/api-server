`use strict`;

module.exports = (sequelize, DataTypes) => sequelize.define('food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    values: ['FRUIT', 'VEGETABLE', 'PROTEIN', 'GRAIN', 'DAIRY'],
  },
});

// food will be the name of the table created
// each property will be a field/column of the table





