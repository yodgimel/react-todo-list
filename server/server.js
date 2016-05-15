var express = require('express');
var path = require('path');

var app = express();

//serving static files from ./dist folder
app.use(express.static('./dist'));

//requests received on / , are sent to client/index.html 
app.use('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
