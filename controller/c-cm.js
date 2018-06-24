const userModel = require('../lib/mysql.js');
const md5 = require('md5')
const checkNotLogin = require('../middlewares/check.js').checkNotLogin
const checkLogin = require('../middlewares/check.js').checkLogin
const moment = require('moment');
const fs = require('fs')

exports.getCm = async ctx => {
    // await checkLogin(ctx)
    await ctx.render('cm', {
        session: ctx.session,
    })
}
exports.postCm = async ctx => {
    let  { name, password ,repeatpass} = ctx.request.body
    console.log(name,password,repeatpass)
    await userModel.findDataByName(name)
        .then(async (result) => {
            console.log(result)
                    await userModel.updateUsePass([md5(password),name])
                        .then(res => {
                            console.log('修改成功', res)
                            
                            ctx.body = {
                                code: 200,
                                message: '修改成功'
                            };
                        })

                    
                })
                }
                
