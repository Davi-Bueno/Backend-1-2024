// app.js

const PORTA = 3000;
const express = require("express");
const app = express();
const routes = require('./routes');


// Uso das rotas
app.use(routes);

app.listen(PORTA, function () {
    console.log("Servidor iniciado na porta 3000!");
});
