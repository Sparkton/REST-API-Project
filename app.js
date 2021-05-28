//const bodyParser = require('body-parser');
const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUSH, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);