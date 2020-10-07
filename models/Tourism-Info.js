const mongoose = require("mongoose");
const { Schema } = mongoose;

const TourismInfo = new Schema({
  year: { type: String, required: true },
  category: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: true },
  data: { type: { String }, required: true },
});

module.exports = mongoose.model("TourismInfo", TourismInfo);