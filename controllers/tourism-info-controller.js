const TourismInfo = require("../models/Tourism-Info");

async function getTourismInfo(req, res) {
  let result = await TourismInfo.find({});
  return res
    .status(200)
    .send({ message: `Informacion de turismo del estado de Chihuahua: `, concepts: result });
}

async function addInfo(req, res) {
  console.log(req.body);
  let { Año, Categoria, Municipio, Region, Datos } = req.body;

  const newInfo = new TourismInfo({
    Año,
    Categoria,
    Municipio,
    Region,
    Datos,
  });
  newInfo.save((err, InfoStored) => {
    if (err) return res.status(501).send({ message: `Error en el modelo: ${err}` });
    return res.status(200).send({ message: "Se agrego correctamente la informacion" });
  });
}

module.exports = {
    getTourismInfo,
    addInfo,
};
