const compose = require('koa-compose')

const user = require('./user')

function combine_routers (routers) {
  const middleware = []
  routers.forEach(router => {
    middleware.push(router.routes())
    middleware.push(router.allowedMethods())
  })
  return compose(middleware)
}

module.exports = combine_routers([user])
