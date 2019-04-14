const { db } = require('./dbConnect');
const RatingService = {};

//READ
RatingService.read = (id) => {
    const sql = `
    SELECT *
    FROM ratings
    WHERE
    ratings.id = $[id]  
    `;
    return db.one(sql, {id});
};

//CREATE
RatingService.create = ( stars, movie_id) => {
    const sql = `
    INSERT INTO
    ratings ( stars, movie_id)
    VALUES
    ($[stars], $[movie_id]);
    RETURNING id