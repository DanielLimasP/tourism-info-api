const router = require("express").Router();
const establecimientoController = require("../controllers/establecimiento-controller");

router.post("/get-establecimiento-from-year", establecimientoController.getEstablecimientoFromYear);
router.post("/create-establecimiento", establecimientoController.createEstablecimiento);

module.exports = router;
