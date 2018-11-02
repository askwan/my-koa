const regist = require('./user/regist');
const login = require('./user/login');
const articleQuery = require('./article/query');
const questionQuery = require('./question/query.js')
module.exports = {
  user:{
    regist,
    login,
  },
  article:{
    query:articleQuery
  },
  question:{
    query:questionQuery
  }
}