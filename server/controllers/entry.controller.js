const db = require("../models");
const Entry = db.entry;

const create = async (req, res) => {
  Entry.create({
    created_date: req.body.created,
    text: req.body.text,
    created_timestamp: req.body.timestamp,
    updated_timestamp: null,
    userId: req.body.userId,
  })
    .then((data) => res.send({ message: "Entry added successfully!", data }))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const findAll = async (req, res) => {
  Entry.findAll({
    where: {
      userId: req.body.userId,
    },
  })
    .then((data) => res.send({ data }))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = { create, findAll };
