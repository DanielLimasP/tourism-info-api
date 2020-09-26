// Finished. TODO: Add some more functions and stuff
const DerramaModel = require("../models/Derrama");

async function getDerramaFromYear(req, res) {
  console.log("Body of the request", req.body);
  let year = req.body.year;

  let result = await DerramaModel.find({ Año: year });

  return res
    .status(200)
    .send({ message: `Derrama from year ${year}`, concepts: result });
}

async function createDerrama(req, res) {
  console.log(req.body);
  let { año, municipio, region, meses } = req.body;

  const newDerrama = new DerramaModel({
    año,
    municipio,
    region,
    meses,
  });
  newDerrama.save((err, derramaStored) => {
    if (err) return res.status(501).send({ message: `Error on model ${err}` });
    return res.status(200).send({ message: "Derrama uploaded" });
  });
}

module.exports = {
  getDerramaFromYear,
  createDerrama,
};
