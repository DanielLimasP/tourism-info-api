const router = require("express").Router();
const derramaController = require("../controllers/derrama-controller");

router.post("/get-derrama-from-year", derramaController.getDerramaFromYear);
router.post("/create-derrama", derramaController.createDerrama);

module.exports = router;
