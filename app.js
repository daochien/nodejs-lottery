require('module-alias/register')

const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.use('/', (req, res) => {
    res.send('<h1>Lottery</h1>');
});

app.listen(3000);