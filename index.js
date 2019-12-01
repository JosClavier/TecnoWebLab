let http = require('http');
let handles = require('./handles')

let serveur = http.createServer();

serveur.on('request', handles.routes)

serveur.listen(8080);