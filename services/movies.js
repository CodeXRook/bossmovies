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

};