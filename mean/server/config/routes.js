var auth = require('./auth.js');


module.exports = function (app) {
  app.get('/partials/*', function (req, res) {
    res.render('../../public/app/' + req.params);
  });

  app.post('/login', auth.authenticate);

  app.get('*', function (req, res) {
    res.render('index');
  });
};
