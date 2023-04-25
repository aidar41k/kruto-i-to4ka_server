const Router = require('express')
const router = new Router
const typeRouter = require('../controllers/typeController')

router.post("/", typeRouter.create);
router.get("/", typeRouter.getAll);
module.exports = router