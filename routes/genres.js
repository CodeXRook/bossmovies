const express = require('express');
const genreRouter = express.Router();
const GenreService = require('../services/genres');

// GET GENRE
genreRouter.get('/', (req, res, next) => {
    const { id } = req.params;

    GenreService.read(id)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        next(err);
    });
});

//CREATE GENRE
genreRouter.post('/', (req, res, next) => {
    const { name } =res.body;

    GenreService.create(name)
    .then(data =>{
        res.json(`Success: Product created with id: ${data.id}`); 