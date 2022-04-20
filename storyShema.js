const mongoose = require('mongoose');


const StoryShema = new mongoose.Schema({
  Story: String,
  Date: String,
});

module.exports = mongoose.model(
  'story', StoryShema, 'Stories'
)