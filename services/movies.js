const { db } =require('./dbConnect');
const MovieService = {};

//CREATE
MovieService.create = (title, genre_id, img_url) => {
const sql = `
INSERT INTO 
movies ( title, genre_id, img_url)
VALUES
($[title], $[genre_id], $[img_url])
RETURNING id;
`;
return db.one(sql, { title, genre_id, img_url});
};


//READ
MovieService.read = (id) => {
    const sql = `
    SELECT *
    FROM 
    movies
    WHERE
    movies.id = $[id]