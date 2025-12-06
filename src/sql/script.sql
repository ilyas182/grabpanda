-- CREATE DATABASE IF NOT EXISTS grabpanda;
-- USE grabpanda;

-- * TABLES

DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS menu_item;
DROP TABLE IF EXISTS menu_subcategory;
DROP TABLE IF EXISTS menu_category;
DROP TABLE IF EXISTS order_item;
DROP TABLE IF EXISTS payment;
DROP TABLE IF EXISTS payment_method;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS customer;


-- * TABLES CREATION

-- ! if no customer login feature
-- CREATE TABLE customer (
--     session_id INT PRIMARY KEY AUTO_INCREMENT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- ! if customer login feature
CREATE TABLE customer (
    cust_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(255) NOT NULL,
    cust_id INT NOT NULL REFERENCES customer (cust_id)
);



CREATE TABLE menu_category (
    menu_category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE menu_subcategory(
    sub_category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    menu_category_id INT NOT NULL REFERENCES menu_category(menu_category_id)
);

CREATE TABLE menu_item (
    menu_item_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    sub_category_id INT NOT NULL REFERENCES menu_subcategory (sub_category_id)
);

CREATE TABLE order_item (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL REFERENCES orders(order_id),
    menu_item_id INT NOT NULL REFERENCES menu_item(menu_item_id),
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE payment_method (
    payment_method_id INT PRIMARY KEY AUTO_INCREMENT,
    method_name VARCHAR(255) NOT NULL,
    transaction_id VARCHAR(255)
);

CREATE TABLE payment (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method_id INT NOT NULL REFERENCES payment_method(payment_method_id),
    order_id INT NOT NULL REFERENCES orders(order_id),
    payment_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO menu_category VALUES 
(1, 'Drinks'),
(2, 'Appetizers'),
(3, 'Western'),
(4, 'Dessert'),
(5, 'Mains');

INSERT INTO menu_subcategory VALUES
(1, 'Hot Beverages', 1),
(2, 'Cold Beverages', 1),
(3, 'Fruit Juices', 1)
(4, 'Salads', 2),
(5, 'Soups', 2),
(6, 'Finger Food', 2),
(7, 'Pasta', 3),
(8, 'Burgers', 3),
(9, 'Cakes', 4),
(10, 'Ice Cream', 4),
(11, 'Steak', 5),
(12, 'Seafood', 5);

INSERT INTO menu_item VALUES
(1, 'Cappuccino', 'A classic Italian coffee drink made with espresso, steamed milk, and a layer of frothy milk foam.', 3.50, 'https://example.com/images/cappuccino.jpg', 1),
(2, 'Espresso', 'A concentrated coffee beverage brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.', 2.50, 'https://example.com/images/espresso.jpg', 1), -- Hot Beverages
(3, 'Iced Latte', 'Espresso and cold milk poured over ice, often lightly sweetened.', 4.00, 'https://example.com/images/iced_latte.jpg', 2), -- Cold Beverages
(4, 'Fresh Orange Juice', 'Freshly squeezed juice from ripe oranges, a great source of Vitamin C.', 4.50, 'https://example.com/images/orange_juice.jpg', 3), -- Fruit Juices
(5, 'Caesar Salad', 'Romaine lettuce and croutons dressed with Parmesan cheese, lemon juice, olive oil, egg, Worcestershire sauce, and black pepper.', 9.50, 'https://example.com/images/caesar_salad.jpg', 4), -- Salads
(6, 'Cream of Tomato Soup', 'A rich, creamy soup made with fresh, ripe tomatoes and a touch of basil.', 6.00, 'https://example.com/images/tomato_soup.jpg', 5), -- Soups
(7, 'Mozzarella Sticks', 'Deep-fried cheese sticks served with a side of marinara dipping sauce.', 8.50, 'https://example.com/images/mozzarella_sticks.jpg', 6), -- Finger Food
(8, 'Spaghetti Carbonara', 'Classic Italian pasta dish with a creamy sauce made from egg yolks, hard cheese, cured pork (pancetta or guanciale), and black pepper.', 15.00, 'https://example.com/images/carbonara.jpg', 7), -- Pasta
(9, 'Classic Cheeseburger', 'A grilled beef patty topped with cheddar cheese, lettuce, tomato, onion, and our signature sauce on a toasted bun.', 12.00, 'https://example.com/images/cheeseburger.jpg', 8), -- Burgers
(10, 'Ribeye Steak (10oz)', 'A well-marbled, juicy cut of beef, grilled to your preference. Served with mashed potatoes and seasonal vegetables.', 28.00, 'https://example.com/images/ribeye_steak.jpg', 9), -- Steak
(11, 'New York Cheesecake', 'A rich, dense, and creamy cheesecake with a graham cracker crust, served with a berry compote.', 7.50, 'https://example.com/images/cheesecake.jpg', 10), -- Cakes
(12, 'Vanilla Bean Ice Cream', 'Two scoops of premium vanilla ice cream made with real Madagascar vanilla beans.', 5.00, 'https://example.com/images/vanilla_ice_cream.jpg', 11); -- Ice Cream

INSERT INTO customer VALUES
(1, 'ilyas', 'ilyas2104@gmail.com', '123456'),
(2, 'taufiq', 'taufiqrahmat095@gmail.com', '123456')

