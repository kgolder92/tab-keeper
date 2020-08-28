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
      date: Date.now(),
    };
    db.create(tabData, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  })
    .catch((err) => res.status(500).send(err));
});

app.put('/edittab/:tabID', (req, res) => {
  // db.updateOne({ size: 'large' }, { name: 'T-90' }, (err, res) => {
  // });
  console.log(req.body.label);
  db.findOneAndUpdate({ _id: req.params.tabID }, { label: req.body.label },
    { new: true }, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
});

app.delete('/deletetab/:tabID', (req, res) => {
  db.deleteOne({ _id: req.params.tabID }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log('server listening on port: ', PORT));
