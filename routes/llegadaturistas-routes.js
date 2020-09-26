const router = require("express").Router();
const llegadaturistasController = require("../controllers/llegadaturistas-controller");

router.post(
  "/get-llegada-turistas-from-year",
  llegadaturistasController.getLlegadaTuristaFromYear
);
router.post(
  "/create-llegada-turista",
  llegadaturistasController.createLlegadaTuristas
);

module.exports = router;
