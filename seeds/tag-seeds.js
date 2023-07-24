const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rap music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'synth music',
  },
  {
    tag_name: 'hardcore music',
  },
  {
    tag_name: 'alternative/indie music',
  },
  {
    tag_name: 'heavy metal music',
  },
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'synth-pop music',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
