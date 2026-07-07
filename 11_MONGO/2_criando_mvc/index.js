const express = require('express');
const app = express();
const conn = require('./db/conn');

const apiRoutes = require('./routes/api/index');
app.use('/api', apiRoutes);

const webRoutes = require('./routes/web/index');
app.use('/', webRoutes);


app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(3000);

