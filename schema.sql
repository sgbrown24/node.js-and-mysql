DROP DATABASE IF EXISTS bamazon;

/* Create database */
CREATE DATABASE bamazon;
USE bamazon;


CREATE TABLE  products(
item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT NOT NULL,
 
  PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("WARRIORS JERSY", "SPORTS", 499.99, 50),
("BUCKS JERSY", "SPORTS", 100.99, 200),
("NUGGETS JERSY", "SPORTS", 29.99, 1000);

