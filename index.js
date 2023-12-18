const express = require('express');
const routerApi = require('./routes')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo en Express');
});

app.listen(port, () => {
  console.log('Mi puerto ' + port);
});

routerApi(app);
