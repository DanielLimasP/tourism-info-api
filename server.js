const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//Initializations
const app = express();
require("./db");

//Settings
app.set("port", process.env.PORT || 420);

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
// TODO: Define routes
//const fooRoutes = require("./bar/route");
//app.use("/foo", fooRoutes);

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Server Initialize
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
