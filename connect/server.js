var http         = require('http'),
    connect      = require('connect'),
    morgan       = require('morgan'),
    port         = 3000;

var app = connect()
  .use(morgan('combined'))
  .use(function(req, res){
    res.end('hello from Nodyn');
  });

http.createServer(app).listen(port, function() {
  console.log( "listening on " + port );
});
