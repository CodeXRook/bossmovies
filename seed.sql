DROP DATABASE IF EXISTS bossmovie_app;
CREATE DATABASE bossmovie_app;

\c bossmovie_app;

 CREATE TABLE movies (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR NOT NULL,
  genre_id INT UNIQUE NOT NULL,
  img_url VARCHAR NOT NULL
);

 CREATE TABLE genres(
  id INT REFERENCES movies(genre_id),
  name VARCHAR NOT NULL
);

 CREATE TABLE ratings(
  id SERIAL PRIMARY KEY NOT NULL,
  stars INT NULL,
   movie_id INT REFERENCES movies(id)
);

  CREATE TABLE comments (
 id SERIAL PRIMARY KEY NOT NULL,
 text VARCHAR NOT NULL,
  movie_id INT REFERENCES movies(id)
);

INSERT INTO movies(id, title, genre_id, img_url) VALUES
(34, 'The Matrix', '12','https://www.youtube.com/watch?v=vKQi3bBA1y8');


INSERT INTO genres(id, name) VALUES
(12,'Action');

INSERT INTO ratings(id, stars, movie_id) VALUES
( 2, 5, 34);

INSERT INTO comments(id, text, movie_id) VALUES
( 5,'BEST MOVIE EVER', 34);