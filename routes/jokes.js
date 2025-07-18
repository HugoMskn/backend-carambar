const express = require('express');
const router = express.Router();
const { Joke } = require('../models');

router.post('/', async (req, res) => {
  const joke = await Joke.create({ content: req.body.content });
  res.status(201).json(joke);
});

router.get('/', async (req, res) => {
  const jokes = await Joke.findAll();
  res.json(jokes);
});

router.get('/select/:id', async (req, res) => {
  const joke = await Joke.findByPk(req.params.id);
  joke ? res.json(joke) : res.status(404).json({ error: "Not found" });
});

router.get('/random', async (req, res) => {
  const jokes = await Joke.findAll();
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});

module.exports = router;
