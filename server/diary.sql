DROP DATABASE IF EXISTS diary;
CREATE DATABASE diary;

\c diary;

CREATE TABLE entries (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  text VARCHAR,
  date DATE
);

INSERT INTO entries (title, text, date)
  VALUES ('dummy entry title', 'dummy entry body. lorem ipsum bla bla bla', NOW())