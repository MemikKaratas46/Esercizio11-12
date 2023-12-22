
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'Audi.html'));
});

app.get('/Mercedes', (req, res) => {
  res.sendFile(path.join(__dirname, '/Mercedes.html'));
});

app.get('/Bmw', (req, res) => {
  res.sendFile(path.join(__dirname, 'Bmw.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


