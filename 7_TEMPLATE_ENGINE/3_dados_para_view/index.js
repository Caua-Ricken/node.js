const express = require('express');
const exphps = require('express-handlebars');

const app = express();

app.engine('handlebars', exphps.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const user = {
        name: 'joão',
        surname: 'silva',
    }
    res.render('home', { usuario: user});
})

app.listen(3000, () => {
    console.log('servidor funcionando')
})