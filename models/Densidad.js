const mongoose = require("mongoose");
const { Schema } = mongoose;

const DensidadSchema = new Schema({
  año: { type: String, required: true },
  municipio: { type: String, required: true },
  region: { type: String, required: true },
  meses: { type: { String }, required: true },
});

module.exports = mongoose.model("Densidad", DensidadSchema);
