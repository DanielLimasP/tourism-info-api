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
const densidadRoutes = require("./routes/densidad-routes");
app.use("/densidad", densidadRoutes);

const ocupacionRoutes = require("./routes/ocupacion-routes");
app.use("/ocupacion", ocupacionRoutes);

const turistasRoutes = require("./routes/llegadaturistas-routes");
app.use("/turistas", turistasRoutes);

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Server Initialize
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
