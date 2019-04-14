const { db } = require('./dbConnect');
const RatingService = {};

//READ
RatingService.read = (id) => {
    const sql = `
    SELECT *
    FROM ratings
    WHERE
    ratings.id = $[id]  
}