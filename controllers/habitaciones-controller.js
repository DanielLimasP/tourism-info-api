const HabitacionesModel = require("../models/Habitaciones");

async function getHabitacionesFromYear(req, res) {
  console.log("Body of the request", req.body);
  let year = req.body.year;

  let result = await HabitacionesModel.find({ Año: year });

  return res
    .status(200)
    .send({ message: `Habitaciones from year ${year}`, concepts: result });
}

async function createHabitaciones(req, res) {
  console.log(req.body);
  let { año, municipio, region, habitaciones } = req.body;

  const newHabitaciones = new HabitacionesModel({
    año,
    municipio,
    region,
    habitaciones,
  });
  newHabitaciones.save((err, habitacionesStored) => {
    if (err) return res.status(501).send({ message: `Error on model ${err}` });
    return res.status(200).send({ message: "Habitaciones uploaded" });
  });
}

module.exports = {
  getHabitacionesFromYear,
  createHabitaciones,
};