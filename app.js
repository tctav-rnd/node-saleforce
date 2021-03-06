var express = require('express');
var routes = require('./routes/index');
var saleforce = require('./saleforce/saleforce');
var app = express();
var server = require('http').Server(app);

app.set('port', process.env.PORT || 3001);
app.use('/', routes);

server.listen(app.get('port'), function () {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
