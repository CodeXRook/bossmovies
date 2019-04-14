const express = require('express');
const commentRouter = express.Router();
const CommentService = require('../services/comments');

//GET COMMENT INFO
commentRouter.get('/:id', (req, res, next)=> {
    const { id} = req.params;

    CommentService.read(id)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        next(err);
    });
});

//CREATE COMMENT
commentRouter.post('/', (req, res, next)=>{
    const {text, movie_id} = req.body;

    CommentService.create(text)
    .then(data => {