const DensidadModel = require("../models/Densidad");

// TODO: Upload snapshot to a server!
async function getDensidadFromYear(req, res) {
  //console.log("Body of the request", req.body)
  let municipio = req.body.municipio;
  let region = req.body.region;
  let meses = req.body.meses;
  let year = req.body.year;

  await DensidadModel.find({ year: req.body.year }).then((concepts) => {
    return res
      .status(200)
      .send({ message: `Densidad from year ${year}`, concepts: concepts });
  });
}

module.exports = {
  getDensidadFromYear,
};
