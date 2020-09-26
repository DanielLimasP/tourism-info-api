const mongoose = require("mongoose");
const { Schema } = mongoose;

const HabitacionesSchema = new Schema({
  año: { type: String, required: true },
  municipio: { type: String, required: true },
  region: { type: String, required: true },
  habitaciones: { type: { number }, required: true },
});

module.exports = mongoose.model("Habitaciones", HabitacionesSchema);
