const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.js")(sequelize, Sequelize);
db.entry = require("../models/entry.js")(sequelize, Sequelize);

db.entry.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
db.user.hasMany(db.entry, { as: "entries" });

module.exports = db;
