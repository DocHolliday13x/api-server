`use strict`;

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const { start } = require('./src/server.js');
const { sequelizeDB } = require('./src/models');

sequelizeDB.sync().then(() => {
  console.log('Successful Connection');
  start(PORT);
})

  .catch(e => console.error(e));



