const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: { type: String },
    email: { type: String },
    contraseña: { type: String }
},
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
