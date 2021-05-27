module.exports = (sequelize, Sequelize) => {
  const Entry = sequelize.define("entries", {
    created_date: {
      type: Sequelize.STRING,
    },
    text: {
      type: Sequelize.STRING,
    },
    created_timestamp: {
      type: Sequelize.DATE,
    },
    updated_timestamp: {
      type: Sequelize.DATE,
    },
  });
  return Entry;
};
