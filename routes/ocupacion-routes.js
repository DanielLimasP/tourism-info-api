const router = require("express").Router();
const ocupacionController = require("../controllers/ocupacion-controller");

router.post("/get-ocupacion-from-year", ocupacionController.getOcupacionFromYear);
router.post("/create-ocupacion", ocupacionController.createOcupacion);

module.exports = router;
