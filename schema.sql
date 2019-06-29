-- USE mbnb;
-- CREATE DATABASE mbnb;

ALTER TABLE items CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE items CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
INSERT INTO items (itemName, itemDescription, cost, images, postedBy)
VALUES ("Technics Turntables", "Two top of the line Technics", 50, "https://images-na.ssl-images-amazon.com/images/I/519QWNCBYBL._SX425_.jpg", "Bryan");