process.title = 'SMI processing';
let args = process.argv,
    port = args[2] || 7070,
    webServer = require('./server');

    webServer.listen(port, function() {
        console.log('Rodando na ' + port);
    })