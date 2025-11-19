-- * TABLES

DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS order;
DROP TABLE IF EXISTS order_item;
DROP TABLE IF EXISTS payment;
DROP TABLE IF EXISTS payment_method;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS menu_item;

-- * TABLES CREATION

-- * if no customer login feature
CREATE TABLE customer (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- * if customer login feature
-- CREATE TABLE customer (
--     session_id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- );

CREATE TABLE order (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(255) NOT NULL,
    session_id INT NOT NULL FOREIGN KEY REFERENCES customer(session_id),
);

CREATE TABLE order_item (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL FOREIGN KEY REFERENCES order(order_id),
    menu_item_id INT NOT NULL FOREIGN KEY REFERENCES menu_item(menu_item_id),
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
);

CREATE TABLE menu_category (
    menu_category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
);

CREATE TABLE menu_item (
    menu_item_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    menu_category_id INT NOT NULL FOREIGN KEY REFERENCES menu_category(menu_category_id),
);

CREATE TABLE payment (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method_id INT NOT NULL FOREIGN KEY REFERENCES payment_method(payment_method_id),
    order_id INT NOT NULL FOREIGN KEY REFERENCES order(order_id),
    payment_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE payment_method (
    payment_method_id INT PRIMARY KEY AUTO_INCREMENT,
    method_name VARCHAR(255) NOT NULL,
    transaction_id VARCHAR(255),
);
