function ok (ctx, data) {
  const ok = true
  ctx.body = {ok, data}
}

function bad (ctx, reason) {
  const message = reason || '请求失败，请稍后再试'
  ctx.body = {message}
}

function wtf (ctx, comment) {
  comment = comment || 'no comment'
  console.error(new Error('wtf? ' + comment))
  ctx.body = {fuck: 'off'}
}

module.exports = {ok, bad, wtf}
