DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(200) NULL,
  department_name VARCHAR(100) NULL,
  price  DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("ceraVe Moisturizing Cream","Beauty", 14.31, 250),
("Neutrogena Makeup Removing Wipes", "Beauty", 8.97, 500),
("Natural Adult Dry Dog Food Salmon", "Pet Supplies", 33.58, 150),
("Purina One Smartblend Natural Formula Adult Dry Dog Food Chicken & Rice", "Pet Supplies", 33.99, 200),
("The First Years Stack Up Cups", "Baby Product", 3.99, 350),
("Nuby Ice Gel Teether Key", "Baby Product", 3.54, 100),
("Wantdo Men's Faux Leather Jacket with Removable Hood", "Clothing, Shoes & Jewelry", 65.76, 50),
("Levi's Men's Faux-Leather Jacket with Hood", "Clothing, Shoes & Jewelry", 69.99, 80),
("Fitbit Charge 3 Fitness Activity Tracker", "Health & Personal Care", 128.95, 30),
("Yunmai Premium Smart Scale", "Health & Personal Care", 69.95, 60);

SELECT*FROM products;