const { Product } = require("../models");

const productData = [
  {
    product_name: "Rage Against the Machine CD",
    price: 14.99,
    stock: 14,
    category_id: 5,
  },
  {
    product_name: "Cuco vinyl record",
    price: 90.0,
    stock: 25,
    category_id: 4,
  },
  {
    product_name: "Leon Bridges CD",
    price: 22.99,
    stock: 12,
    category_id: 2,
  },
  {
    product_name: "King Lazy Eye CD",
    price: 12.99,
    stock: 50,
    category_id: 1,
  },
  {
    product_name: "Gorillaz vinyl record",
    price: 29.99,
    stock: 22,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
