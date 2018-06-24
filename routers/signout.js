const router = require('koa-router')();

router.get('/signout', async(ctx, next) => {
    ctx.session = null;
    console.log('注销成功')
    ctx.body = true
})

module.exports = router