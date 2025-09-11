const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Session = sequelize.define(
  "tbl_sessions",
  {
    id_session: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: { type: DataTypes.STRING, unique: true, allowNull: false },
    hostName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: () => {
        let now = new Date();
        now.setHours(now.getHours() + 2);
        return now;
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Session;
