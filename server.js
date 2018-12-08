const express = require('express');
const action = require('./data/helpers/actionModel');
const project = require('./data/helpers/projectModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Starting Up Bitches!' });
});

server.get('/api/actions', (req, res) => {
  action
    .get()
    .then(actions => res.status(200).json(actions))
    .catch(err =>
      res
        .status(500)
        .json({
          message: 'The action information could not be retrieved.',
          error: err
        })
    );
});

server.get('/api/actions/:id', (req, res) => {
  const { id } = req.params;
  action
    .get(id)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({
          message: 'The action with the specified ID does not exist.'
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'The action information could not be retrieved.',
        error: err
      });
    }); 
});

module.exports = server;