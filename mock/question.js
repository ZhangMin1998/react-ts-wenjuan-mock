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
          title: Random.ctitle(),
          componentList: [
            // Title
            {
              fe_id: Random.id(),
              type: 'questionTitle', // 组件类型不能重复
              title: '标题',
              isHidden: false,
              isLocked: false,
              props: {
                text: '个人信息调研',
                level: 1,
                isCenter: false
              }
            },
            // Input
            {
              fe_id: Random.id(),
              type: 'questionInput',
              title: '输入框1',
              isHidden: false,
              isLocked: false,
              props: {
                title: '你的姓名',
                placeholder: '请输入姓名...',
              }
            },
            // Input
            {
              fe_id: Random.id(),
              type: 'questionInput',
              title: '输入框2',
              isHidden: false,
              isLocked: false,
              props: {
                title: '你的年龄',
                placeholder: '请输入年龄...',
              }
            }
          ]
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
    response(ctx) {
      // console.log('ctx', ctx, ctx.query)
      const { query = {} } = ctx
      const isDeleted = ctx.url.indexOf('isDeleted=true') > -1
      const isStar = ctx.url.indexOf('isStar=true') > -1
      const pageSize = parseInt(query.pageSize) || 10
      const pageNum = parseInt(query.pageNum)
      return {
        errno: 0,
        data: {
          list: getQuestionList({len:pageSize, isStar, isDeleted, pageNum}), // 当前页
          total: 100 // 总数
        }
      }
    }
  },
  {
    // 更新问卷
    url: '/api/question/:id',
    method: 'patch',
    response() {
      return {
        errno: 0
      }
    }
  },
  {
    // 复制问卷
    url: '/api/question/duplicate/:id',
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
    // 批量彻底删除问卷
    url: '/api/question',
    method: 'delete',
    response() {
      return {
        errno: 0
      }
    }
  }
]