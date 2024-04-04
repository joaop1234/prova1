
const express = require('express');
const sql = require('mssql');

const dbConfig = {
    user: 'sa',
    password: 'password',
    server: 'localhost',
    database: 'SESI',
};

sql.connect(dbConfig, function (err) {
    if (err) console.log(err);
});

const app = express();

app.use(express.json());
