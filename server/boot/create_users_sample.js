module.exports = function(app) {
  app.dataSources.cardsDs.automigrate('Client', function(err) {

    if (err) throw err;

    var Client = app.models.Client;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    Client.create([
      { email: 'freecode@gmail.com', password: 'password'},
      { email: 'johndoe@gmail.com', password: 'opensesame'},
      { email: 'janedoe@gmail.com', password: 'opensesame'}
    ], function(err, clients) {

      if (err) throw err;

      console.log('clients created', clients[0]);

      //create admin role 
      Role.create({
        name: 'admin'
      }, function(err, role) {
        
        if (err) throw err; 

        console.log('Created role:', role);

        //make clients[0] an admin
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: clients[0].id 
        }, function(err, principal) {
          if (err) throw err; 

          console.log('Created principal:', principal)
        })
      })
    });
  })
}