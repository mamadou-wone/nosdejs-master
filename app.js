const express = require('express');
const app = express();
const http = require('http');


app.use('/amir', (req, res, next) => {
    console.log('Amir Boss...');
    res.send('Hello Amir!');
});

app.use('/', (req, res, next) => {
    console.log('Incoming request...');
    res.send('Hello World!');
});

app.listen(3000);