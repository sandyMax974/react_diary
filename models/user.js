module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STING,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
  return User;
};

// we don’t need to write CRUD functions, Sequelize supports all of them
