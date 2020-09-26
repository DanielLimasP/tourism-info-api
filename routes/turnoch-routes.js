const router = require("express").Router();
const turnochController = require("../controllers/turnoch-controller");

router.post(
  "/get-turistas-noche-from-year",
  turnochController.getTurnochFromYear
);
router.post("/create-turnoch", turnochController.createTurnoch);

module.exports = router;
