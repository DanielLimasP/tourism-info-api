const mongoose = require("mongoose");
const { Schema } = mongoose;

const TourismInfo = new Schema({
  Año: { type: String, required: true },
  Categoria: { type: String, required: true },
  Municipio: { type: String, required: true },
  Region: { type: String, required: true },
  Datos: { type: { String }, required: true },
});

module.exports = mongoose.model("TourismInfo", TourismInfo);