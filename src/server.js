const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// app.use(bodyParser.json()); // deprecated
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("../models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
