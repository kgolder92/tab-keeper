const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => (
  res.send('hello')
));

const PORT = 4000;
app.listen(PORT, () => console.log('server listening on port: ', PORT));
