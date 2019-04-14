const { db } = require('./dbConnect');
const GenreService = {};

//READ
GenreService.read = (id) => {
    const sql = `
    SELECT *
    FROM genres
    Where