const Koa = require('koa')
const body_parser = require('koa-bodyparser')
const session = require('koa-session')
const RedisStore = require('koa2-session-redis')
const logger = require('./middlewares/logger')
const routers = require('./routers/index')

const app = new Koa()
app.proxy = true
app.keys = ['Who? Who is but the form following the function of what', 'and what I am is a man in a mask']

app.use(body_parser({
  enableTypes: ['json', 'form', 'text'],
  // extendTypes: {text: ['text/xml', 'application/xml']}
}))
app.use(logger)
app.use(session({
  key: 'bones',
  maxAge: 1000 * 3600 * 24 * 30,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  store: new RedisStore()
}, app))
app.use(routers)
app.use(ctx => {
  ctx.body = {message: 'try again later'}
})

const PORT = 3000
app.listen(PORT, '127.0.0.1', console.log('http://127.0.0.1:' + PORT))
