module.exports = function(app) {
  app.dataSources.cardsDs.automigrate('Card', function(err) {
    if (err) throw err;

    app.models.Card.create([{
      title: 'Bel Cafe',
      description: 'Vancouver',
      status: 'in-progress',
      clientId: 1,
    }, {
      title: 'Three Bees Coffee House',
      description: 'San Mateo',
      status: 'todo',
      clientId: 1,
    }, {
      title: 'Caffe Artigiano',
      description: 'Vancouver',
      status: 'todo',
      clientId: 2,
    }], function(err, cards) {
      if (err) throw err;

      console.log('Models created: \n', cards);
    });
  });
};
