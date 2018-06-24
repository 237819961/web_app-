const router = require('koa-router')();
const userModel = require('../lib/mysql.js')
const md5 = require('md5')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin
const md = require('markdown-it')();  


router.get('/call', async(ctx, next) => {
    // await checkNotLogin(ctx)
    await ctx.render('call', {
        session: ctx.session,
    })
})

module.exports=router