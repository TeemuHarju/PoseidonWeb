import express from 'express';
 
const app = express();
const port = 5000;

app.use(require('./routes'));

app.listen(port);