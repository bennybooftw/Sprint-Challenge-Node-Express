const express = require('express');
const action = require('./data/helpers/actionModel');
const project = require('./data/helpers/projectModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Starting Up Bitches!' });
});

module.exports = server;