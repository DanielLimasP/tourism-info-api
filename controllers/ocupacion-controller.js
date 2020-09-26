const OcupacionModel = require("../models/Ocupacion");

async function getOcupacionFromYear(req, res) {
  console.log("Body of the request", req.body);
  let year = req.body.year;

  let result = await OcupacionModel.find({ Año: year });

  return res
    .status(200)
    .send({ message: `Ocupacion from year ${year}`, concepts: result });
}

async function createOcupacion(req, res) {
  console.log(req.body);
  let { año, municipio, region, meses } = req.body;

  const newOcupacion = new OcupacionModel({
    año,
    municipio,
    region,
    meses,
  });
  newOcupacion.save((err, OcupacionStored) => {
    if (err) return res.status(501).send({ message: `Error on model ${err}` });
    return res.status(200).send({ message: "Ocupacion uploaded" });
  });
}

module.exports = {
  getOcupacionFromYear,
  createOcupacion,
};
