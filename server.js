const express = require('express');
const bodyParser = require('body-parser');
const api = require('./controller');


const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', api);


app.listen(port, function () {
  console.table("SERVIDOR RODANDO NA PORTA " + `${port}`)
});





