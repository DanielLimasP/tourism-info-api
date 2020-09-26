const EstablecimientoModel = require("../models/Establecimiento");

async function getEstablecimientoFromYear(req, res) {
  console.log("Body of the request", req.body);
  let year = req.body.year;

  let result = await EstablecimientoModel.find({ Año: year });

  return res
    .status(200)
    .send({ message: `Establecimiento from year ${year}`, concepts: result });
}

async function createEstablecimiento(req, res) {
  console.log(req.body);
  let { año, municipio, region, establecimiento } = req.body;

  const newEstablecimiento = new EstablecimientoModel({
    año,
    municipio,
    region,
    establecimiento,
  });
  newEstablecimiento.save((err, establecimientoStored) => {
    if (err) return res.status(501).send({ message: `Error on model ${err}` });
    return res.status(200).send({ message: "Establecimiento uploaded" });
  });
}

module.exports = {
  getEstablecimientoFromYear,
  createEstablecimiento,
};