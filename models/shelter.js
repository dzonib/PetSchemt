const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShelterSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  city: {
    type: String, 
    required: true
  },
  name: {
    type: String,
    required: true
  },
  animals: [
    {
        type: Schema.Types.ObjectId,
        ref: 'animal'
    }
  ]
})

module.exports = Shelter = mongoose.model('shelter', ShelterSchema);