const express = require('express');
const genreRouter = express.Router();
const GenreService = require('../services/genres');

// GET GENRE
genreRouter.get('/', (req, res, next) => {
    const { id } = req.params;

    GenreService.read(id)
    .then(data => {
        res.json(data);