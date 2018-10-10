module.exports = async function (ctx, next) {
  console.log(
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
