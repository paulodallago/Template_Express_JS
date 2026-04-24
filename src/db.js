const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.BD_NAME,
  process.env.BD_USER,
  process.env.BD_PASSWORD,
  {
    host: process.env.BD_HOST,
    dialect: "postgres",
    port: process.env.BD_PORT,
    dialectOptions: {
      useUTC: false,
    },
    timezone: "-03:00",
    logging: false,
  },
);

module.exports = sequelize;
