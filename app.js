const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const tourRouter = require('./routers/tourRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

mongoose.connect('').then(() => console.log('DB connected!'));

app.get('/api/v1/', (req, res) => {
  res.send('Home page!');
});

app.use('/api/v1/tours', tourRouter);

module.exports = app;
