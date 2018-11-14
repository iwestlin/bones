const moment = require('moment')

module.exports = async function (ctx, next) {
  console.log(
    '\ndate:',
    moment().format('YYYY-MM-DD HH:mm:ss'),
    '\nip: ',
    ctx.ip,
    '\npath: ',
    ctx.request.path,
    '\nsession:',
    ctx.session,
    '\nbody:',
    ctx.request.body,
    '\n--------------'
  )
  await next()
}
