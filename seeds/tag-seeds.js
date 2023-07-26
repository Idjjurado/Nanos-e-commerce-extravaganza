const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "This is amazing",
  },
  {
    tag_name: "One of the best",
  },
  {
    tag_name: "Unmatched",
  },
  {
    tag_name: "Amazing bo bazing",
  },
  {
    tag_name: "Certified Bangers",
  },
  {
    tag_name: "Heavy hitting music",
  },
  {
    tag_name: "I wanna listen again",
  },
  {
    tag_name: "I wanna listen again and again and again",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
