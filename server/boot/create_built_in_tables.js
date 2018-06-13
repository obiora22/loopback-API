module.exports = function(app) {
const ds = app.datasources.cardsDs;
var builtInTables = ['AccessToken', 'ACL', 'RoleMapping', 'Role'];
ds.automigrate(builtInTables, function(err) {
  if (err) throw err;
  console.log(`Tables created with ${ds.adapter.name}`);
 
})
}