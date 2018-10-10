const moment = require('moment')
const router = require('koa-router')()
const {query, pool} = require('../db')
const {wtf, bad, ok} = require('../utils/response')

router.post('/api/user/ok', async ctx => {
  ok(ctx, ctx.request.body)
})

router.post('/api/user/bad', ctx => {
  bad(ctx, 'this is why')
})

router.post('/api/user/wtf', ctx => {
  wtf(ctx)
})

module.exports = router
