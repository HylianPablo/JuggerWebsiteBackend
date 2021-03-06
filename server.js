const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const postCharge = require('./stripe')
require('dotenv').config()

const app = express();
const router = express.Router()

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/user.routes")(app);
require("./routes/tournament.routes")(app);
require("./routes/payment.routes")(app);
router.post('/stripe/charge', postCharge)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});