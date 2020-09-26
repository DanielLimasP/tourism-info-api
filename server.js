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

const derramaRoutes = require("./routes/derrama-routes");
app.use("/derrama", derramaRoutes);

const ocupacionRoutes = require("./routes/ocupacion-routes");
app.use("/ocupacion", ocupacionRoutes);

const turistasRoutes = require("./routes/llegadaturistas-routes");
app.use("/turistas", turistasRoutes);

const turnochRoutes = require("./routes/turnoch-routes");
app.use("/turnoch", turnochRoutes);

const establecimientoRoutes = require("./routes/establecimiento-routes");
app.use("/establecimiento", establecimientoRoutes);

const habitacionesRoutes = require("./routes/habitaciones-routes");
app.use("/habitaciones", habitacionesRoutes);

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Server Initialize
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
