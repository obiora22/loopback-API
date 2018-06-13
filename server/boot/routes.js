
module.exports = function(app) {
  const User = app.models.User;
  var users = function () {
    return app.models.user.find({}, (err, users) => {
      if (err) throw err;
      console.log(users);
      return users;
    })
  }
  app.post('/login', (req, res) => {
    console.log(req.body);
  
    app.models.User.login({
      email: req.body.email,
      password: req.body.password
    }, function(err, token) {
      if (err) console.log(err.message);
      console.log(token);
      res.send(token);
      // res.render('users', {
      //   accessToken: token.id,
      //   users: users(),
      // })
    });

    
  })

  app.get('/home', (req, res) => {
  res.locals.data = 'DATA';
  res.render('home')
  })

  app.get('/form', (req, res) => {
    console.log('NEW')
    res.render('new')
  })

}