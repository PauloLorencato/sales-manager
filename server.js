let http = require('http'),
config = require('./config'),
fileHandler = require('./filehandler'),
parse = require('url').parse,
types = config.types,
rootfolder = config.rootFolder,
defaultIndex = config.defaultIndex,
server = http.createServer();

server.on('request', onRequest);

function onRequest(req, res) {
    let filename = parse(req.url).pathname,    
        fullpath,
        extension;

    if (filename === '/') {
        filename = defaultIndex;
    }

    fullpath = rootfolder + filename;
    extension = filename.substring(filename.lastIndexOf('.') + 1);
    
    fileHandler(fullpath, function(data) {
        res.writeHead(200, {
            'Content-type': types[extension] || 'text/plain',
            'Content-length': data.length
        });
        res.end(data);
    }, function(err) {
        res.writeHead(404);
        res.end(err);
    })
    console.log(filename);
}

module.exports = server;