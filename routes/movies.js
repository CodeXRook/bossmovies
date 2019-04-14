const express = require('express');
const movieRouter = express.Router();
const MovieService = require('../services/movies');

//CREATE NEW MOVIE
movieRouter.post('/', (req, res, next) => {
    const { title, genre_id, img_url} = req.body;

    MovieService.create(title, genre_id, img_url)
    .then(data => {
        res.json(`Success: New movie created with ID: ${data.id}`);
    })
    .catch(err => {
        next(err);
      });
      
});

//GET MOVIE INFO
movieRouter.get('./:id', (req, res, next) =>{
    const { id } = req.params;