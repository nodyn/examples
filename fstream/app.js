var fstream = require('fstream');

var writer = fstream.Writer({ path: "path/to/file", mode: 0755, size: 6 });
writer.write("hello\n");
writer.end();
