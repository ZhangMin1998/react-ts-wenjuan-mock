const Mock = require('mockjs')
const Random = Mock.Random
const getQuestionList = require('./data/getQuestionList')
module.exports = [
  {
    // 获取单个问卷信息
    url: '/api/question/:id',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle()
        }
        // errno: 1002,
        // msg: '请求错误'
      }
    }
  },
  {
    // 创建问卷
    url: '/api/question',
    method: 'post',
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id()
        }
      }
    }
  },
  {
    // 获取（查询）问卷列表
    url: '/api/question',
    method: 'get',
    response() {
      return {
        errno: 0,
        data: {
          list: getQuestionList(), // 当前页
          total: 100 // 总数
        }
      }
    }
  }
]