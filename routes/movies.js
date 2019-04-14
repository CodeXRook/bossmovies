const express = require('express');
const movieRouter = express.Router();
const MovieService = require('../services/movies');

//CREATE NEW MOVIE
movieRouter.post('/', (req, res, next) => {
    const { title, genre_id, img_url} = req.body;

    MovieService.create(title, genre_id, img_url)
    .then(data => {
}