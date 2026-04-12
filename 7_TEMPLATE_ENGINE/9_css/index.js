const express = require('express');
const exphps = require('express-handlebars');
const path = require('path');
const routes = require('./routes');

const app = express();

const hbs = exphps.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/', routes);

app.listen(3000, () => {
    console.log('servidor funcionando')
})