var port = 7780
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    debug = 7781
  } else if (process.argv.indexOf('debug') >=0 ) {
    debug = 7781
  }

module.exports = {
  server: {
      port: port  //  本地服务端口
  },
  session: {
      secret:'unique-orion6',  // 会话
      key: 'orion6', //cookie
      cookie: {secure: false, maxAge: null},
      resave:true,
      saveUninitialized: true
  }
};
