import * as mongoose from 'mongoose'

export const VaccinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  availableAge: {
    type: Number,
    required: true
  },
  isEnabled: {
    type: Boolean,
    default: true
  }
})