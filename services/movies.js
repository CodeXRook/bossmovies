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
    `;
    return db.one(sql, { id });
};

//UPDATE
MovieService.update = (id, title, genre_id, img_url) => {
    const sql = `
    UPDATE 
    movies
    SET
    title = $[title],
      genre_id = $[genre_id],
      img_url = $[img_url] 
      WHERE
      movies.id = $[id]
    `;
    return db.none(sql, {id, title, genre_id, img_url });

}