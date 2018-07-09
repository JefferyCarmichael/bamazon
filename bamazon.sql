    CREATE DATABASE bamazon;
    use bamazon;

  CREATE TABLE products(
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    -- unique id for each product--
    manufacturer_name  VARCHAR (50) NOT NULL,
    -- brand
    product_name VARCHAR (50) NOT NULL,
    -- Name of product--
    department_name VARCHAR(50) NOT NULL,

    price DECIMAL(10,2)  NOT NULL DEFAULT 0,
    -- cost to customer--
    stock_quantity INTEGER(10) NOT NULL DEFAULT  0,
    -- how much of the product is available in stores--
    product_sales DECIMAL(10,2)  NOT NULL DEFAULT 0,
    qty_sold INT(10) NOT NULL DEFAULT 0
    PRIMARY KEY (item_id)
    );



INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("ION", "Fitbit", "Smartwatch", 240.00, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("Gear 3", "Samsung", "Smartwatch", 279.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("65 in. LED TV", "Sony", "TVs", 999.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("49 in. LED TV", "Insignia", "TVs", 199.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("39 in. LED TV", "LG", "TVs", 379.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("iPhone 8 plus 256gb", "Apple", "Smartphone", 949.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("Galaxy Note 8 64gb", "Samsung", "Smartphone", 699.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("V30 64gb", "LG", "Smartphone", 799.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("Karma Quadrocopter", "GoPro", "Drone", 799.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("Dura VR Racer", "Protocol", "Drone", 99.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("Typhoon H Hexacopter", "Yuneec", "Drone", 772.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("iPad Pro 12.9 in.", "Apple", "Tablet", 1079.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("Galaxy Tab S3", "Samsung", "Tablet", 547.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("Fire 7 in.", "Amazon", "Tablet", 279.99, 100);

INSERT INTO products (product_name, manufacturer_name, department_name, price, stock_quantity)
VALUES ("Fire 10.1 in.", "Amazon", "Tablet", 149.99, 100);


UPDATE products SET stock_quantity= 10  WHERE item_id = 14;
UPDATE products SET stock_quantity=stock_quantity-1  WHERE item_id = 1;
SELECT * FROM bamazon.products WHERE stock_quantity < 10;

UPDATE products SET (stock_quantity, qty_sold)=(stock_quantity-1,qty_sold+1)  WHERE item_id = 1;

use bamazon;

CREATE TABLE departments(
  department_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    -- unique id for each product--
  department_name VARCHAR(50) NOT NULL,

  over_head_costs  DECIMAL(10,2)  NOT NULL DEFAULT 0,
    -- cost to bussiness--
  product_sales DECIMAL(10,2)  NOT NULL DEFAULT 0,

  total_profit DECIMAL(10,2)  NOT NULL DEFAULT 0,
    PRIMARY KEY (Department_id)
   
    );
