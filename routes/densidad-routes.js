const router = require("express").Router();
const densidadController = require("../controllers/densidad-controller");

router.post("/get-densidad-from-year", densidadController.getDensidadFromYear);

module.exports = router;
