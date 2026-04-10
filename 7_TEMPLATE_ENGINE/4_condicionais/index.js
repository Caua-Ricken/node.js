const express = require('express');
const exphps = require('express-handlebars');
const path = require('path');
const routes = require('./routes');

const app = express();

app.engine('handlebars', exphps.engine());
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(3000, () => {
    console.log('servidor funcionando')
})