const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Welcome to RockWell AutoMation');
});
app.listen(8081, '0.0.0.0', () => {
  console.log('server strated at 8081');
});
