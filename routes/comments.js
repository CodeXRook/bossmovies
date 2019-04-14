const express = require('express');
const commentRouter = express.Router();
const CommentService = require('../services/comments');

//GET COMMENT INFO
commentRouter.get('/:id', (req, res, next)=> {
    const { id} = req.params;

    CommentService.read(id)
    .then(data => {
}