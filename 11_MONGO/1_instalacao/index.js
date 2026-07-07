const express = require('express');
const app = express();
const conn = require('./db/conn');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000);

