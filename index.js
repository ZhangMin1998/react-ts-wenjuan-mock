const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index')

const app = new Koa()
const router = new Router

async function getRes(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      const res = fn()
      resolve(res)
    }, 1500)
  })
}

// 注册mock路由
mockList.forEach(item => {
  const { url, method, response } = item
  router[method](url, async ctx => {
    // const res = response()
    const res = await getRes(response) // 模拟网络请求的加载状态 1.5s
    ctx.body = res // 输出结果
  })
})

app.use(router.routes())
app.listen(3002) // port 端口


// npm i koa koa-router --save
// npm i nodemon --save-dev