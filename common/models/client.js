'use-strict';

function clearBaseAcls (modelType, modelConfig) {
  modelType.settings.acls.length = 0; 
  console.log("Model", modelConfig)
  modelConfig.acls.forEach(element => {
    modelType.settings.acls.push(element);
  });
  console.log('After', modelType.settings.acls)
}
module.exports = function(Client) {
  // const UserJson = require('./user.json');
  // clearBaseAcls(User, UserJson);
  
}