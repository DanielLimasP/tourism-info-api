// mondgo db connection file
// we gonna use both local instance of mongo and atlas 3AjImNSpPp4VHYIL

const mongoose = require("mongoose");

const atlas = "admin"; // Ask for admin
const local = "mongodb://localhost/iweek-hackaton-db";

mongoose
  .connect(local, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB Connection established"))
  .catch((error) => console.log(error));
