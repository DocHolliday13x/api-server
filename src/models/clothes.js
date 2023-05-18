`use strict`;

module.exports = (sequelize, DataTypes) => sequelize.define('clothes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
    values: ['URT', 'Forged', 'Altama', 'Kuhl', 'Arcteryx', 'Patagonia', 'Gatorz'],
  },
});

// clothes will be the name of the table created, pluralized







