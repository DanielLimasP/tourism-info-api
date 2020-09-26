const router = require("express").Router();
const densidadController = require("../controllers/turnoch-controller");

router.post("/get-turristas_noche-from-year", TurnochController.getTurnochFromYear);
router.post("/create-turnoch", turnochController.createTurnoch);

module.exports = router;