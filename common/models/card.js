'use strict';

module.exports = function(Card) {
  Card.greet = function(msg, id, cb) {
    cb(null, `greetings ... ${msg}`);
  }

  
  Card.remoteMethod('greet', {
    accepts: [{arg: 'msg', type: 'string'}, {arg: 'id', type: 'integer'}],
    returns: [{arg: 'greeting', type: 'string'}],
    http: {path: '/:id/greet', verb: 'get'}
  })
};
