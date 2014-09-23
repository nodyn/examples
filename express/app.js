var express = require('express'),
    serveStatic = require('serve-static'),
    app = express();

app.use(serveStatic('public', {'index': ['default.html', 'default.htm']}));

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
