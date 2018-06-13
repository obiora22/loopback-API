// var app = require('../server/server');
// console.log(app);
// module.exports = function(app) {
  
//   var user = app.models.User;

//   app.post('/login', (req, res, next) => {
//     console.log(req.body);
//     user.login({
//       email: req.body.email,
//       password: req.body.password
//     }, (err, token) => {
//       if (err) throw err;

//       res.send(token.id);
//     })
//   })
// }