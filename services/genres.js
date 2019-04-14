const { db } = require('./dbConnect');
const GenreService = {};

//READ
GenreService.read = (id) => {
    const sql = `
    SELECT *
    FROM genres
    Where
    genre.id $[id]
    `;
    return db.one(sql, { id });
};

//CREATE
GenreService.create = (name) => {
    const sql = `
    INSERT INTO 
    genres (name)
    VALUE
};