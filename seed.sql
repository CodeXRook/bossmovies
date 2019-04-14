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
  );

