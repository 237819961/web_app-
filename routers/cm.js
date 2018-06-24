const router = require('koa-router')();
const controller = require('../controller/c-cm')


router.get('/cm', controller.getCm)

router.post('/cm', controller.postCm)

module.exports = router