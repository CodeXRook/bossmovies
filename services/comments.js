const { db } = require('./dbConnect');
const CommentService = {};


//READ
CommentService.read = (id) => {
    const sql = `
    SELECT *
    FROM comments
    WHERE
    comments.id = $[id]
    `;
    return db.one(sql, { id });
};

//CREATE
CommentService.create = (text, movie_id) =>