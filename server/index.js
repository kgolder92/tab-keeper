/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const path = require('path');
const axios = require('axios');

const db = require('../db');

const app = express();

app.use(express.json()); // put together multiple packets

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/tabs', (req, res) => {
  db.find({})
    .then((tabs) => res.status(200).send(tabs))
    .catch((err) => res.status(500).send(err));
});

app.post('/addtab', (req, res) => {
  axios.post(
    'https://api.linkpreview.net',
    {
      q: req.body.website,
      key: process.env.TOKEN,
    },
  ).then((resp) => {
    console.log(resp.data);
    const tabData = {
      website: req.body.website,
      label: req.body.label,
      title: resp.data.title,
      image: resp.data.image,
    };
    db.create(tabData, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  });
});

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
