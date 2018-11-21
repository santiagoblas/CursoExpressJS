const express = require("express");
const app = express();
const morgan = require('morgan')

//---SETTINGS---------------
app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//---MIDDLEWARES------------
app.use(morgan('dev'));
app.use(morgan('combined'));
app.use(morgan('short'));

//---RUTAS------------------
app.get("/", (req, res) => {
    res.end("Hola amigos");
});

app.get("/login", (req, res) => {
    res.end("Este es el login");
});

app.get("*", (req, res) => {
    res.end("Archivo no encontrado");
})

app.listen(3000, function() {
    console.log("Servidor funcionando");
    console.log('Nombre de la App: ' + app.get('appName'));
});