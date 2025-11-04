const express = require('express');
const shareRoute = require('./routes/shareRoute')
const app = express();
app.use(express.json());

app.use('/api/v1', shareRoute)

module.exports = app;