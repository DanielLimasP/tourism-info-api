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

  await newInfo.save((err, InfoStored) => {
    if (err) return res.status(501).send({ message: `Error with the model: ${err}` });
    return res.status(200).send({ message: "Info added succesfully" });
  });
}

// It seems we have to design some queries... 
async function queryInfo(req, res){
  let result = []
  console.log(req.query)
  let { year, category, city, region } = req.query
  // Year - Category
  if(year != null && category != null && city == null && region == null){
    result = await TourismInfo.find({year: year, category: category})
  }
  // Year - Category - City
  else if(year != null && category != null && city != null && region == null){
    result = await TourismInfo.find({year: year, category: category, city: city})
  }
  // Year - Category - Region
  else if(year != null && category != null && city == null && region != null){
    result = await TourismInfo.find({year: year, category: category, region: region})
  }
  // Year - City
  else if(year != null && category == null && city != null && region == null){
    result = await TourismInfo.find({year: year, city: city})
  }
  // Year - Region
  else if(year != null && category == null && city == null && region != null){
    result = await TourismInfo.find({year: year, region: region})
  }
  // Complete Query
  else{
    result = await TourismInfo.find({year: year, category: category, city: city, region: region})
  }
  //console.log("Result of the query: " + result)
  return res.status(200).send({ message: "Result of the query: ", result: result}) 
}

module.exports = {
    getTourismInfo,
    addInfo,
    queryInfo
};
