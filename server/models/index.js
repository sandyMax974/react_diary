const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.development.DB,
  config.development.USER,
  config.development.PASSWORD,
  {
    dialect: config.development.dialect,
    host: config.development.HOST,
    operatorsAliases: false,
    pool: {
      max: config.development.pool.max,
      min: config.development.pool.min,
      acquire: config.development.pool.acquire,
      idle: config.development.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.entry = require("./entry.js")(sequelize, Sequelize);

db.entry.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
db.user.hasMany(db.entry, { as: "entries" });

module.exports = db;
