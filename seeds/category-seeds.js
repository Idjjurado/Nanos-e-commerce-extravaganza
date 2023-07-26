const { Category } = require("../models");

const categoryData = [
  {
    category_name: "In My Feelings",
  },
  {
    category_name: "RADICAL",
  },
  {
    category_name: "HARDCORE!",
  },
  {
    category_name: "Jams to groove to",
  },
  {
    category_name: "The best of the best",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
