const TourismInfo = require("../models/Tourism-Info");

async function getTourismInfo(req, res) {
  let result = await TourismInfo.find({});
  return res
    .status(200)
    .send({ message: `Tourism information about Chihuahua State: `, concepts: result });
}

async function addInfo(req, res) {
  console.log(req.body);
  let { year, category, city, region, data } = req.body;

  const newInfo = new TourismInfo({
    year,
    category,
    city,
    region,
    data,
  });

  newInfo.save((err, InfoStored) => {
    if (err) return res.status(501).send({ message: `Error with the model: ${err}` });
    return res.status(200).send({ message: "Info added succesfully" });
  });
}

module.exports = {
    getTourismInfo,
    addInfo,
};
