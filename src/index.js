const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const db = require("./config/db");
const methodOverride = require("method-override");

// Connect to DB
db.connect();
const app = express();
const port = 3000;

const route = require("./routes");

// config file static

app.use(express.static(path.join(__dirname, "public")));

// phan giai post

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// custom method
app.use(methodOverride("_method"));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//router
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
