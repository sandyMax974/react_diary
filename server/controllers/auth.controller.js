const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Entry = db.entry;

const Op = db.Sequelize.Op;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then(() => res.send({ message: "User was registered successfully!" }))
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

module.exports = { signup };
