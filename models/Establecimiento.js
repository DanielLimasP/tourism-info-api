const mongoose = require("mongoose");
const { Schema } = mongoose;

const EstablecimientoSchema = new Schema({
  año: { type: String, required: true },
  municipio: { type: String, required: true },
  region: { type: String, required: true },
  establecimiento: { type: { number }, required: true },
});

module.exports = mongoose.model("Establecimiento", EstablecimientoSchema);
