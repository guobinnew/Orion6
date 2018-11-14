// 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
var api_v1 = require('./v1')

module.exports = function(app){
  app.use('/api/v1', api_v1)
};
