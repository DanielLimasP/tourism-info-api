const router = require("express").Router();
const tourismInfoController = require("../controllers/tourism-info-controller");

router.get('/', tourismInfoController.getTourismInfo);
// http://localhost:420/info/query/?year=2020&category=Densidad&city=Madera&region=Arqueologica
router.get('/query', tourismInfoController.queryInfo);
router.post('/add-info', tourismInfoController.addInfo);

module.exports = router;
