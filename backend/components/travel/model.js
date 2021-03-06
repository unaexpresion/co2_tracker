const mongoose = require('mongoose')
const { Schema, model } = mongoose
const Conveyance = require('../conveyance/model')

const travelSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  start_address: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 10
  },
  end_address: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 10
  },
  transportation: { 
    type: Schema.Types.ObjectId, 
    ref: Conveyance,
    required: true,
  },
  km: {
    type: Number,
    required: true,
  },
  number_workers: {
    type: Number,
    required: true,
    min: 1,
    trim: true,
  },
  round_trip: {
    type: Boolean,
    required: true,
    default: false
  },
  total_CO2: {
    type: Number,
  },
})

const Travel = model('Travel', travelSchema)

module.exports = Travel