const express = require('express');
const ratingRouter = express.Router();
const RatingService = require('../services/ratings');

// Get rating info 
ratingRouter.get('/:id', (req, res, next)=>{

    const { id } = req.params;

    RatingService.read(id)