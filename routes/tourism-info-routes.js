const router = require("express").Router();
const tourismInfoController = require("../controllers/tourism-info-controller");

router.get("/", tourismInfoController.getTourismInfo);
router.post("/add-info", tourismInfoController.addInfo);

module.exports = router;
