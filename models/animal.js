const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const AnimalSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  breed: {
    type: String,
  },
  name: {
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


module.exports = mongoose.module('animal', AnimalSchema);