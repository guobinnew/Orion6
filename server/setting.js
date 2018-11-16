module.exports = {
  session: {
      secret:'unique-orion6',  // 会话
      key: 'orion6', //cookie
      cookie: {secure: false, maxAge: null},
      resave:true,
      saveUninitialized: true
  }
};
