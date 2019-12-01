let fs = require('fs');
let url = require('url');

module.exports = {
    routes: (request, response) => {
        let query = url.parse(request.url, true).query
        let name = query.name === undefined ? 'anonyme' : query.name
        let route = url.parse(request.url, true).pathname

        if (route === '/hello') {
            fs.readFile('index.html', 'utf8', (err, data) => {
                if (err) {
                    response.writeHead(500);
                    response.end("Ce fichier n'existe pas");
                } else {
                    response.writeHead(200, {
                        'Content-type': 'text/html; charset=utf-8'
                    });
                    data = data.replace('{{name}}', name);
                    response.end(data);
                }
            })
        } else if (route === '/') {
            response.end("Hello this my back end you can use /hello \n/hello takes a name query parameter and\n"
                + "random names replies hello [name]\n"
                + "your own name replies with a short intro of yourself\n"
                + "any other replies a 404 code with a not found message");
        } else {
            response.end("error 404");
        }
    }
};