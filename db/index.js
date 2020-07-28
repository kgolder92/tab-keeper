/* eslint-disable no-console */
const mongoose = require('mongoose');

// const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/tab-keeper', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (err) => console.log('could not connect to mongo :(', err));
db.once('open', () => console.log('connected to mongo :)'));

const tabSchema = mongoose.Schema({
  id: Number,
  website: String,
  label: String,
});

const Tab = mongoose.model('tab', tabSchema);

module.exports = Tab;
