const router = require("express").Router();
const habitacionesController = require("../controllers/habitaciones-controller");

router.post("/get-habitaciones-from-year", habitacionesController.getHabitacionesFromYear);
router.post("/create-habitaciones", habitacionesController.createHabitaciones);

module.exports = router;
