const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const AnimalSchema = new Schema({
  animalType: {
    type: String,
    required: true
  },
  animalImage: {
    type: String,
    required: true
  },
  animalAge: {
    type: Number,
    required: true
  },
  animalBreed: {
    type: String,
  },
  animalName: {
    type: String,
    required: true
  },
  shelter: {
    type: Schema.Types.ObjectId,
    ref: 'shelter'
  },
  reserved: {
    type: Boolean
  }
});


module.exports = mongoose.model('animal', AnimalSchema);