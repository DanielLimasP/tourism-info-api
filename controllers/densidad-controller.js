// Finished. TODO: Add some more functions and stuff
const DensidadModel = require("../models/Densidad");

async function getDensidadFromYear(req, res) {
  console.log("Body of the request", req.body);
  let year = req.body.year;

  let result = await DensidadModel.find({ Año: year });

  return res
    .status(200)
    .send({ message: `Densidad from year ${year}`, concepts: result });
}

async function createDensidad(req, res) {
  console.log(req.body);
  let { año, municipio, region, meses } = req.body;

  const newDensidad = new DensidadModel({
    año,
    municipio,
    region,
    meses,
  });
  newDensidad.save((err, densidadStored) => {
    if (err) return res.status(501).send({ message: `Error on model ${err}` });
    return res.status(200).send({ message: "Densidad uploaded" });
  });
}

module.exports = {
  getDensidadFromYear,
  createDensidad,
};
