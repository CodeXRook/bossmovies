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
        res.json(`Success: Comment created with id: ${data.id}`);
    })
    .catch(err => {
        next(err);
    });
});

// Update Comment
commentRouter.put('/:id', (req, res, next)=> {
    const { id } =req.params;
    const { text, movie_id} = req.body;

    CommentService.update(id, text, movie_id)
    .then(()=>{
        res.json("Success: Comment updated");
    })
    .catch(err => {
        next(err);
    });
 });

 // Delete Comment
commentRouter.delete('/:id', (req, res, next) => {
    const { id } = req.params;
