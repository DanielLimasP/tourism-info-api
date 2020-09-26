const router = require("express").Router();
const densidadController = require("../controllers/densidad-controller");

router.post("/get-densidad-from-year", densidadController.getDensidadFromYear);
router.post("/create-densidad", densidadController.createDensidad);

module.exports = router;
