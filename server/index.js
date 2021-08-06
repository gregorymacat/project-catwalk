const express = require('express');
const logger = require('morgan');
const router = require('./routers.js');
const app = express();

app.use(express.static('public'));
app.use(express.json())
const port = 3000;

app.use(router);
app.use(logger('dev'));

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));