const express = require('express');
const exphps = require('express-handlebars');

const app = express();

app.engine('handlebars', exphps.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {layout: false});
})

app.listen(3000, () => {
    console.log('servidor funcionando')
})