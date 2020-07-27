/* eslint-disable no-console */
const express = require('express');
const path = require('path');

// const db = require('../db');

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => (
  res.send('hello')
));

app.put('/edit', (req, res) => {
  // db.updateOne({ size: 'large' }, { name: 'T-90' }, (err, res) => {
  // });
  res.send('edited');
});

app.delete('/delete', (req, res) => {
  // Tank.deleteOne({ size: 'large' }, (err) => {
  //   if (err) return handleError(err);
  // });
  res.send('deleted');
});

const PORT = 4000;
app.listen(PORT, () => console.log('server listening on port: ', PORT));
