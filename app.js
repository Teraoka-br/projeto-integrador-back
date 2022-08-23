const express = require('express');
const cors = require('cors');
const { ValidationError } = require('sequelize');

const router = require('./routes/clientesrouters');
const { cliente } = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("API cadastro v1.0");
});

// Importando as rotas
app.use('/clientes', cliente);


// Tratamento de erro
app.use(function (err, req, res, next) {
    console.error(err.stack);

    if (err instanceof ValidationError) {
        res.status(500).send({
            error: true,
            detail: err
        });
    }
    else {
        res.status(err.statusCode || 500).send({
            error: true,
            detail: err
        });
    }
});

module.exports = app;