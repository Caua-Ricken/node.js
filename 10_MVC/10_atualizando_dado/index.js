const express = require('express');
const app = express()
const conn = require('./db/conn');

const Task = require('./models/Task');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const api = require('./routes/api/index');
const web = require('./routes/web');

app.use('/', api)
app.use('/', web)

const listen = async () => {
    try {
        await conn.sync();
        app.listen(3000);
    } catch (error) {
        console.log(error);
    }
};

listen();