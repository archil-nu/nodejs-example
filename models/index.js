const Sequelize = require('sequelize');
const dbConfig = require('../config/config');
const env = process.env.NODE_ENV || '';
const db = {};

const sequelize = new Sequelize(dbConfig[env].db, dbConfig[env].user, dbConfig[env].password, {
  host: dbConfig[env].host,
  dialect: dbConfig[env].dialect,
  storage: dbConfig[env].storage,
  logging: dbConfig[env].logging
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Task = require("./task-model.js")(sequelize, Sequelize);

module.exports = db;