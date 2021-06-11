const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../models");
// const User = db.user;
// lines 4-5 could be replaced by
// const { user } = require("../models")
// console.log(`db object is ${db.user}`);
const authRoute = require("../routes/auth.routes");
const entryRoute = require("../routes/entry.routes");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
};

app.use(cors(corsOptions));

// app.use(bodyParser.json()); // deprecated
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

authRoute(app);
entryRoute(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
