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
// User routes
const authRoutes = require("./routes/auth-routes")
app.use("/user", authRoutes);
// Info routes
const tourismInfoRoutes = require("./routes/tourism-info-routes")
app.use("/info", tourismInfoRoutes);

//Server Initialize
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
