const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
// const Entry = db.entry;

const Op = db.Sequelize.Op;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
// const user = require("../models/user");

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

const signin = async (req, res) => {
  // console.log("express controller signin", req);
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    console.log(user);
    if (!user) {
      res.status(404).send({
        message: "User not found",
      });
    }
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    let token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400,
    });
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid password",
      });
    } else {
      return res.status(200).send({
        userId: user.id,
        username: user.username,
        email: user.email,
        accessToken: token,
      });
    }
  });
  // .catch((err) => {
  //   res.status(500).send({
  //     message: err.message,
  //   });
  // });
};

module.exports = { signup, signin };
