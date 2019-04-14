const { db } = require('./dbConnect');
const CommentService = {};


//READ
CommentService.read = (id) => {
    const sql = `
    SELECT *
    FROM comments
    WHERE
}