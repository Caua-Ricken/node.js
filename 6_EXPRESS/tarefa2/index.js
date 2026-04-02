const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const pagesWeb = require('./routes/pages');
const api = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/web', pagesWeb);
app.use('/api', api);


app.listen(port, (err) => {
    if (err) {
        console.log(`Error starting server: ${err}`);
    }
    console.log(`server is running on http://localhost:${port}`);
})