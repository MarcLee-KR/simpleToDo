"use strict";

const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { "sequelize": sequelize, "Sequelize": Sequelize }

db.Todo = require("./Todo")(sequelize, Sequelize);

module.exports = db;
