module.exports = {
  HOST: "localhost",
  USER: "admin",
  DB: "diary_developement",
  dialect: "postgres",
  // pool is optional, it will be used for Sequelize connection pool configuration
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
