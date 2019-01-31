var express = require('express')
var Settings = require('./settings')
const Models = require('./lib/models/')
var app = express()

var routes = require('./lib/routes.js');
app.use(routes);



Models.sequelize.sync().then(function () {
    app.listen(Settings.port, function () {
        console.log(`listening on ${Settings.port}`);
    });
});
