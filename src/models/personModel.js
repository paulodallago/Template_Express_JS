const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Person = sequelize.define(
  "tbl_persons",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING, allowNull: false
    },
    email: {
      type: DataTypes.STRING, allowNull: false
    },
    password: {
      type: DataTypes.STRING, allowNull: false
    },
    age: {
      type: DataTypes.INTEGER, allowNull: false
    }
  },
  {
    timestamps: false
  }
);

module.exports = Person;
