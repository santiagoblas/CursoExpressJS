const express = require("express");
const morgan = require('morgan');
const app = express();

//require de rutas
const routes = require('./routes');
const routesApi = require('./routes-api')

//---RUTAS------------------
app.use(routes);
app.use('/api', routesApi);

app.get("*", (req, res) => {
    res.end("Archivo no encontrado");
});

//---SETTINGS---------------
app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//---MIDDLEWARES------------
app.use(morgan('dev'));
app.use(morgan('combined'));
app.use(morgan('short'));

app.listen(3000, function() {
    console.log("Servidor funcionando");
    console.log('Nombre de la App: ' + app.get('appName'));
});