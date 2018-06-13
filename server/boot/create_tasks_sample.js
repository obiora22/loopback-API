module.exports = function(app) {
  app.dataSources.cardsDs.automigrate('Task', function(err) {
    if (err) throw err;

    app.models.Task.create([
      {name: 'Learn Algorithms', done: false, cardId: 1},
      {name: 'Learn NodeJS', done: false, cardId: 1}
    ], function(err, tasks) {
        if (err) throw err;
        console.log('Tasks created', tasks);
    })
  })
}