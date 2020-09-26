const TurnochModel = require("../models/Turnoch");

async function getTurnochFromYear(req, res) {
  console.log("Body of the request", req.body);
  let year = req.body.year;

  let result = await TurnochModel.find({ Año: year });

  return res.status(200).send({
    message: `Turristas de Noche from year ${year}`,
    concepts: result,
  });
}

async function createTurnoch(req, res) {
  console.log(req.body);
  let { año, municipio, region, meses } = req.body;

  const newTurnoch = new TurnochModel({
    año,
    municipio,
    region,
    meses,
  });
  newTurnoch.save((err, llegadaturistasStored) => {
    if (err) return res.status(501).send({ message: `Error on model ${err}` });
    return res.status(200).send({ message: "Turistas de Noche uploaded" });
  });
}

module.exports = {
  getTurnochFromYear,
  createTurnoch,
};
