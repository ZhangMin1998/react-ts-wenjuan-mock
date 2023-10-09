const Mock = require('mockjs')

const Random = Mock.Random()

module.export = [
  {
    url: '/api/test',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          name: `${Random.cname()} - ${Random.name()} `
        }
      }
    }
  }
]

// Mock.mock('/api/test', 'get', () => {
//   return {
//     errno: 0,
//     data: {
//       name: `${Mock.Random.cname()} - ${Date.now()} `
//     }
//   }
// })