const TourismInfo = require("../models/Tourism-Info");
const cities = {
  "Nuevo Casas Grandes": "True",
  "Madera": "True",
  "Bocoyna": "True",
  "Ocampo": "True",
  "Urique": "True",
  "Guachochi": "True",
  "Batopilas": "True",
  "Balleza": "True",
  "Chinipas": "True",
  "G. y Calvo": "True",
  "Guazapares": "True",
  "Guerrero": "True",
  "Maguarichi": "True",
  "Moris": "True",
  "Uruachi": "True",
  "Chihuahua": "True",
  "Cuauhtemoc": "True",
  "Ojinaga": "True",
  "Juarez": "True",
  "Delicias": "True",
  "Camargo": "True",
  "Jimenez": "True",
  "H. del Parral": "True",
  "Ahumada": "True",
  "Aldama": "True",
  "Allende": "True",
  "Ascencion": "True",
  "Bachiniva": "True",
  "Buenaventura": "True",
  "Casas Grandes": "True",
  "Coyame del Sotol": "True",
  "Gomez Farias": "True",
  "Janos": "True",
  "Julimes": "True",
  "Lopez": "True",
  "Manuel Benavides": "True",
  "Matachi": "True",
  "Meoqui": "True",
  "Namiquipa": "True",
  "Riva Palacio": "True",
  "Rosales": "True",
  "Sn Fco. Borja": "True",
  "Sn Fco. Conchos": "True",
  "Santa Barbara": "True",
  "Saucillo": "True",
  "Temosachi": "True",
  "Valle de Zaragoza": "True",
  "Estatal": "True",
  "Ascension": "True",
  "Carichi": "True",
  "Matacha": "True"
}

const regions = {
  "Arqueologica": "True",
  "Barrancas del Cobre": "True",
  "Chihuahua": "True",
  "Desierto": "True",
  "Juarez": "True",
  "Perla de Conchos": "True",
  "Ruta de Villa": "True",
  "Todas": "True"
}

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
  let { year, category, city, region, wildcard } = req.query

  if(year == null){
    result = {message: "You didn't specify a year. Please specify a year."}
  }
  
  // Year - Category
  if(year != null && category != null && city == null && region == null && wildcard == null){
    result = await TourismInfo.find({year: year, category: category})
  }
  // Year - Category - City
  else if(year != null && category != null && city != null && region == null && wildcard == null){
    result = await TourismInfo.find({year: year, category: category, city: city})
  }
  // Year - Category - Region
  else if(year != null && category != null && city == null && region != null && wildcard == null){
    result = await TourismInfo.find({year: year, category: category, region: region})
  }
  // Year - City
  else if(year != null && category == null && city != null && region == null && wildcard == null){
    result = await TourismInfo.find({year: year, city: city})
  }
  // Year - Region
  else if(year != null && category == null && city == null && region != null && wildcard == null){
    result = await TourismInfo.find({year: year, region: region})
  }
  // Year - Wildcard
  else if(year != null && category == null && city == null && region == null && wildcard != null){
    console.log("Search bar query")
    if(cities.hasOwnProperty(wildcard) && regions.hasOwnProperty(wildcard)){
      result = await TourismInfo.find({year: year, city: wildcard})
    }else if(regions.hasOwnProperty(wildcard)){
      result = await TourismInfo.find({year: year, region: wildcard})
    }else if(cities.hasOwnProperty(wildcard)){
      result = await TourismInfo.find({year: year, city: wildcard})
    }else{
      return res.status(200).send({ message: "Couldn't find info related to that city or region. Try it again."})
    }
  }
  // Complete Query
  else{
    result = await TourismInfo.find({year: year, category: category, city: city, region: region})
  }
  console.log("Result of the query: " + result)
  return res.status(200).send({ message: "Result of the query: ", result: result}) 
}

module.exports = {
    getTourismInfo,
    addInfo,
    queryInfo
};
