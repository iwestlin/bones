function ok (ctx, data = {}) {
  ctx.body = {data}
}

function bad (ctx, reason) {
  const message = reason || 'sorry, please try again later'
  ctx.body = {message}
}

function wtf (ctx, comment) {
  comment = comment || 'no comment'
  console.error(new Error('wtf? ' + comment))
  ctx.body = {FBI: 'Warning'}
}

module.exports = {ok, bad, wtf}
