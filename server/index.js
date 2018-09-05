var express = require('express');
var app = express();
var router = require('./router.js');

app.use(express.static(__dirname + '/../client/dist'));

app.use(router);

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

