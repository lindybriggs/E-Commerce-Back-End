require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  // WHEN I add my database name, MySQL username, and MySQL password to an environment variable file (.env)
  // THEN I am able to connect to a database using Sequelize
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    port: 3306,
  });

module.exports = sequelize;
