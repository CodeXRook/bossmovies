const express = require('express');
const ratingRouter = express.Router();
const RatingService = require('../services/ratings');

// Get rating info 
ratingRouter.get('/:id', (req, res, next)=>{

    const { id } = req.params;

    RatingService.read(id)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        next(err);
    });
});

//CREATE RATING
ratingRouter.post('/', (req, res, next) => {
    const {stars, movie_id} =res.body;

    RatingService.create(stars, movie_id)
    .then(data => {
        res.json(`Success: Rating created with id: ${data.id}`);
    })
    .catch(err =>{
        next(err);
    });
});

// Update RATING
ratingRouter.put('/:id', (req, res, next)=> {
    const { id } = req.params;
    const { stars, movie_id} =res.body;

    RatingService.update(id, stars, movie_id)
    .then(()=>{
        res.json("Success: Rating updated");
    })
    .catch(err => {
        next(err);
   });
});

// Delete ratings
ratingRouter.delete('/:id', (req, res, next) =>{
    const { id } = req.params;
