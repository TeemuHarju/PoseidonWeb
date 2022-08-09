import express from 'express';
import bodyParser from 'body-parser';
 
const app = express();
const port = 3000;

app.use(bodyParser.json())

//app.use('/', require('./routes/index.ts'));
app.use('/users', require('./routes/users.ts'));


app.listen(port);