var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env];


// setup express
var app = express();
require('./server/config/express.js')(app, config);

// setup datastore
require('./server/config/mongoose.js')(config);

// setup routes
require('./server/config/routes.js')(app);


app.listen(config.port);
console.log('listening on port ' + config.port);
