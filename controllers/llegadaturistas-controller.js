const LlegadaTuristasModel = require("../models/Llegada-Turistas");

async function getLlegadaTuristaFromYear(req, res) {
    console.log("Body of the request", req.body);
    let year = req.body.year;
  
    let result = await LlegadaTuristasModel.find({ Año: year });
  
    return res
      .status(200)
      .send({ message: `Llegada de turistas from year ${year}`, concepts: result });
  }
  
  async function createLlegadaTuristas(req, res) {
    console.log(req.body);
    let { año, municipio, region, meses } = req.body;
  
    const newLlegadaTuristas = new LlegadaTuristasModel({
      año,
      municipio,
      region,
      meses,
    });
    newLlegadaTuristas.save((err, llegadaturistasStored) => {
      if (err) return res.status(501).send({ message: `Error on model ${err}` });
      return res.status(200).send({ message: "Llegada de Turistas uploaded" });
    });
  }
  
  module.exports = {
    getLlegadaTuristaFromYear,
    createLlegadaTuristas,
  };
  